"use server";

import { supabase } from "@/lib/supabase";

type FormState = {
  success: boolean;
  message: string;
};

type ResendAttachment = {
  filename: string;
  content: string;
  content_type: string;
  content_id: string;
};

const QUOTE_NOTIFICATION_EMAIL =
  process.env.QUOTE_NOTIFICATION_EMAIL || "hdprintingandpackaging@gmail.com";
const CONTACT_NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL || QUOTE_NOTIFICATION_EMAIL;

async function sendQuoteNotificationEmail(payload: {
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service_type: string;
  quantity: number | null;
  dimensions: string | null;
  material: string | null;
  message: string | null;
  file?: File | null;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail =
    process.env.RESEND_FROM_EMAIL || "HD Printing & Packaging <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Skipping quote email notification.");
    return;
  }

  let attachments: ResendAttachment[] = [];
  let imageHtml = `<p><strong>Uploaded File:</strong> No file attached</p>`;

  if (payload.file && payload.file.size > 0 && payload.file.type.startsWith("image/")) {
    const bytes = await payload.file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    attachments = [
      {
        filename: payload.file.name,
        content: base64,
        content_type: payload.file.type,
        content_id: "quote-image",
      },
    ];

    imageHtml = `
      <p><strong>Uploaded Image:</strong></p>
      <img 
        src="cid:quote-image" 
        alt="Uploaded quote image" 
        style="max-width: 400px; height: auto; border-radius: 8px; border: 1px solid #ddd;" 
      />
    `;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
      <h2>New Quote Request Received</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Company:</strong> ${payload.company || "-"}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Primary Requirement:</strong> ${payload.service_type}</p>
      <p><strong>Estimated Quantity:</strong> ${payload.quantity ?? "-"}</p>
      <p><strong>Dimensions:</strong> ${payload.dimensions || "-"}</p>
      <p><strong>Material:</strong> ${payload.material || "-"}</p>
      <p><strong>Message:</strong> ${payload.message || "-"}</p>
      ${imageHtml}
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [QUOTE_NOTIFICATION_EMAIL],
      reply_to: payload.email,
      subject: `New Quote Request: ${payload.service_type}`,
      html,
      text: `New quote request received from ${payload.name}`,
      attachments,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to send quote email: ${body}`);
  }
}

async function sendContactNotificationEmail(payload: {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail =
    process.env.RESEND_FROM_EMAIL || "HD Printing & Packaging <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Skipping contact email notification.");
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
      <h2>New Contact Message Received</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "-"}</p>
      <p><strong>Message:</strong> ${payload.message}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [CONTACT_NOTIFICATION_EMAIL],
      reply_to: payload.email,
      subject: `New Contact Message from ${payload.name}`,
      html,
      text: `New contact message received from ${payload.name}`,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to send contact email: ${body}`);
  }
}
export async function submitQuote(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    const rawFormData = Object.fromEntries(formData.entries());

    if (!rawFormData.name || !rawFormData.email || !rawFormData.phone || !rawFormData.service_type) {
      return {
        success: false,
        message: "Please fill in all required fields."
      };
    }

    const file = formData.get("file") as File | null;

    const payload = {
      name: String(rawFormData.name),
      company: rawFormData.company ? String(rawFormData.company) : null,
      email: String(rawFormData.email),
      phone: String(rawFormData.phone),
      service_type: String(rawFormData.service_type),
      quantity: rawFormData.quantity ? parseInt(String(rawFormData.quantity), 10) : null,
      dimensions: rawFormData.dimensions ? String(rawFormData.dimensions) : null,
      material: rawFormData.material ? String(rawFormData.material) : null,
      deadline: rawFormData.deadline ? String(rawFormData.deadline) : null,
      message: rawFormData.message ? String(rawFormData.message) : null,
      status: "pending",
    };

    const { error } = await supabase.from("quote_requests").insert([payload]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    try {
      await sendQuoteNotificationEmail({
        ...payload,
        file,
      });
    } catch (emailError) {
      console.error("Quote email notification failed:", emailError);
    }

    return {
      success: true,
      message: "Quote request submitted successfully. Our team will contact you shortly."
    };
  } catch (error) {
    console.error("Failed to submit quote", error);
    return {
      success: false,
      message: "An error occurred while submitting your request. Please try again later."
    };
  }
}

export async function submitContact(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    
    // Server-side validation
    if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
      return {
        success: false,
        message: "Please fill in all required fields."
      };
    }
    
    const payload = {
      name: String(rawFormData.name),
      email: String(rawFormData.email),
      phone: rawFormData.phone ? String(rawFormData.phone) : null,
      message: String(rawFormData.message),
      status: "pending",
    };

    const { error } = await supabase.from("contact_messages").insert([payload]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    try {
      await sendContactNotificationEmail(payload);
    } catch (emailError) {
      console.error("Contact email notification failed:", emailError);
    }

    return { 
      success: true, 
      message: "Message sent successfully. We will be in touch soon."
    };
  } catch (error) {
    console.error("Failed to submit contact", error);
    return { 
      success: false, 
      message: "An error occurred while sending your message. Please try again later."
    };
  }
}

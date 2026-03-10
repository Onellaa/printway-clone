"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

export async function submitQuote(prevState: any, formData: FormData) {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    
    // Server-side validation (basic example)
    if (!rawFormData.name || !rawFormData.email || !rawFormData.phone || !rawFormData.service_type) {
      return {
        success: false,
        message: "Please fill in all required fields."
      };
    }
    
    // Real Supabase insert
    const { data, error } = await supabase.from('quote_requests').insert([
      {
        name: rawFormData.name,
        company: rawFormData.company || null,
        email: rawFormData.email,
        phone: rawFormData.phone,
        service_type: rawFormData.service_type,
        quantity: rawFormData.quantity ? parseInt(rawFormData.quantity as string) : null,
        dimensions: rawFormData.dimensions || null,
        material: rawFormData.material || null,
        deadline: rawFormData.deadline || null,
        message: rawFormData.message,
        status: 'pending'
      }
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
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

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    
    // Server-side validation
    if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
      return {
        success: false,
        message: "Please fill in all required fields."
      };
    }
    
    // Real Supabase insert
    const { data, error } = await supabase.from('contact_messages').insert([
      {
        name: rawFormData.name,
        email: rawFormData.email,
        phone: rawFormData.phone || null,
        message: rawFormData.message,
        status: 'pending'
      }
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
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

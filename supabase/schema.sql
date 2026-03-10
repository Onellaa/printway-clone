-- Supabase SQL Schema for Printway

-- Service Categories Table
CREATE TABLE public.service_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Portfolio Items Table
CREATE TABLE public.portfolio_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category_id UUID REFERENCES public.service_categories(id),
    image_url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- FAQs Table
CREATE TABLE public.faqs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Testimonials Table
CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_name TEXT NOT NULL,
    company_name TEXT,
    message TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Contact Messages Table
CREATE TABLE public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending'::text,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Quote Requests Table
CREATE TABLE public.quote_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service_type TEXT NOT NULL,
    quantity INTEGER,
    dimensions TEXT,
    material TEXT,
    deadline DATE,
    message TEXT,
    file_url TEXT,
    status TEXT DEFAULT 'pending'::text,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Adding RLS (Row Level Security) Policies
ALTER TABLE public.service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow public read access for contents
CREATE POLICY "Allow public read access on service_categories" ON public.service_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on portfolio_items" ON public.portfolio_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access on faqs" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Allow public read access on testimonials" ON public.testimonials FOR SELECT USING (true);

-- Allow public insert access for forms
CREATE POLICY "Allow public insert on contact_messages" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on quote_requests" ON public.quote_requests FOR INSERT WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_portfolio_category ON public.portfolio_items(category_id);
CREATE INDEX idx_contact_status ON public.contact_messages(status);
CREATE INDEX idx_quote_status ON public.quote_requests(status);

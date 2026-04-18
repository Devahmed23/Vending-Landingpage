'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { m, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Mail, MessageSquare, Clock, ChevronDown } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    line1: 'support@vendsavvy.com',
    line2: 'We typically reply within 24 hours',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    line1: 'Available inside the app for paid plans',
    line2: 'Fastest way to get help',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    line1: 'Monday – Friday, 9am – 6pm EST',
    line2: 'Emergency support available 24/7 for Pro plans',
  },
];

const faqs = [
  {
    q: 'How do I get started with VendSavvy?',
    a: "Sign up for a free 28-day trial — no credit card required. You'll get full access to every feature from day one.",
  },
  {
    q: 'Can I import my existing data?',
    a: 'Yes. VendSavvy supports CSV imports for machines, products, and sales history. Our support team can help you migrate.',
  },
  {
    q: 'What happens if I need help setting up?',
    a: "All paid plans include priority support. We're also building an onboarding flow to get you up and running in under 10 minutes.",
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All data is encrypted in transit and at rest. We perform daily backups and maintain 99.9% uptime.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. There are no long-term contracts. You can cancel at any time and your data will be retained for 30 days.',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <m.div
      className="border border-border rounded-xl overflow-hidden"
      whileHover={{ borderColor: 'var(--primary)' }}
      transition={{ duration: 0.18 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm">{q}</span>
        <m.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-4 h-4 text-foreground/50" />
        </m.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-foreground/70 border-t border-border pt-4">
              {a}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden text-center"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.09) 100%)' }}>
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#81E8C4]/12 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full bg-[#1583F1]/8 blur-[90px] pointer-events-none" />
        <FadeIn direction="up" className="relative">
          <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We&apos;re <span className="gradient-text">Here to Help</span></h1>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto">
            Have a question, need support, or just want to talk to someone about VendSavvy? Reach out — we
            respond within 24 hours.
          </p>
        </FadeIn>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left: Contact Info */}
          <FadeIn direction="left">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <StaggerContainer className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <StaggerItem key={item.title}>
                  <m.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.12), rgba(129,232,196,0.18))' }}>
                      <item.icon className="w-5 h-5 text-[#1583F1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.line1}</p>
                      <p className="text-xs text-foreground/50 mt-1">{item.line2}</p>
                    </div>
                  </m.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn direction="right" delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease }}
                  className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[360px]"
                  style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.06) 0%, rgba(129,232,196,0.10) 100%)', border: '1px solid rgba(21,131,241,0.20)' }}
                >
                  <m.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, rgba(21,131,241,0.15), rgba(129,232,196,0.22))' }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Mail className="w-8 h-8 text-primary" />
                  </m.div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-foreground/70 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                    { label: 'Subject', name: 'subject', type: 'text', placeholder: 'What can we help you with?' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium mb-2">{field.label}</label>
                      <Input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="transition-all focus:ring-primary"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-all"
                    />
                  </div>
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </m.div>
                </m.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 pb-16 md:pb-24"
        style={{ background: 'linear-gradient(160deg, rgba(21,131,241,0.04) 0%, rgba(129,232,196,0.07) 100%)' }}>
        <div className="max-w-3xl mx-auto pt-16">
          <FadeIn direction="up" className="text-center mb-10">
            <p className="gradient-text text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </FadeIn>
          <StaggerContainer className="space-y-3">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}

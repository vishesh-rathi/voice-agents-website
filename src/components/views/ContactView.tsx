import React, { useState } from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { DemoBookingFormData } from '../../types';
import { CustomSelect, SelectOption } from '../ui/CustomSelect';
import { StylishUnderline } from '../StylishUnderline';
import confetti from 'canvas-confetti';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  CalendarCheck,
  Check,
  PhoneCall,
  Bot,
  Workflow
} from 'lucide-react';

const serviceOptions: SelectOption[] = [
  { 
    value: 'Native Voice Agents', 
    label: 'Native Voice Agents (Multilingual Inbound & Outbound)',
    badge: 'Popular',
    icon: <PhoneCall className="w-4 h-4" />,
    description: 'Hindi, Gujarati, Marathi, Bengali, Tamil, Telugu & English phone agents'
  },
  { 
    value: 'Omnichannel Chatbots (WhatsApp, SMS & Web)', 
    label: 'Omnichannel Chatbots (WhatsApp, SMS & Website)',
    badge: 'Unified',
    icon: <Bot className="w-4 h-4" />,
    description: 'Automate WhatsApp inquiries, transactional SMS, and website chat'
  },
  { 
    value: 'AI Consulting & Custom Automation', 
    label: 'AI Consulting & Custom Automation',
    badge: 'SME Focus',
    icon: <Workflow className="w-4 h-4" />,
    description: 'Discovery audit, CRM/ERP integration, and operational workflows'
  },
  { 
    value: 'Full Operations Modernization', 
    label: 'Full Operations Modernization Suite',
    badge: 'Enterprise',
    icon: <Building2 className="w-4 h-4" />,
    description: 'Complete voice, WhatsApp, web chat, and backend modernization'
  }
];

export const ContactView: React.FC = () => {
  const { demoPrefillService, submitContactForm } = useWordPressContent();

  const [formData, setFormData] = useState<DemoBookingFormData>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    serviceInterest: demoPrefillService || 'Native Voice Agents',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setSubmitSuccess(res.message);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore confetti errors
        }
        setFormData({
          fullName: '',
          businessName: '',
          phone: '',
          email: '',
          serviceInterest: 'Native Voice Agents',
          message: ''
        });
        setErrors({});
      }
    } catch {
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-view" className="py-12 lg:py-16 space-y-16">
      
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>DIRECT IMPLEMENTATION PARTNER</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
          Get in Touch with <StylishUnderline>Sampark</StylishUnderline>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Speak with our automation specialists to discuss your customer channels, regional language needs, and timeline.
        </p>
      </section>

      {/* Main Grid: Left Form / Right Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Box (7 cols) */}
          <div className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRY</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Tell us about your business. We will prepare a practical demo suited to your communication channels.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Inquiry Received!</span>
                </div>
                <p className="text-sm leading-relaxed">
                  {submitSuccess}
                </p>
                <button
                  onClick={() => setSubmitSuccess(null)}
                  className="mt-2 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errors.form && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 text-xs rounded-xl font-medium">
                    {errors.form}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary ${
                        errors.fullName ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 font-semibold">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your business name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary ${
                        errors.businessName ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-[11px] text-red-500 font-semibold">{errors.businessName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary ${
                        errors.phone ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 font-semibold">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-semibold">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Interest */}
                <CustomSelect
                  label="Service of Interest *"
                  options={serviceOptions}
                  value={formData.serviceInterest}
                  onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                  id="contact-service-select"
                />

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">
                    Message <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about your business inquiry volume, workflow, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover py-3.5 px-6 rounded-xl font-bold text-sm shadow-sm hover:shadow transition-all active:scale-98 disabled:opacity-70 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Expectations & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Headquarters & Contact
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      LOCATION
                    </span>
                    <p className="font-bold text-foreground mt-0.5">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      EMAIL
                    </span>
                    <p className="font-bold text-foreground mt-0.5">
                      <a href="mailto:contact@samparksolutions.in" className="hover:text-primary transition-colors">
                        contact@samparksolutions.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      PHONE
                    </span>
                    <p className="font-bold text-foreground mt-0.5">+91 79 4008 8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      WORKING HOURS
                    </span>
                    <p className="font-bold text-foreground mt-0.5">Monday to Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect box */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>What you can expect</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-foreground/90">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Live walkthrough of Gujarati, Hindi & English voice agents</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Clear ROI estimation tailored for your operational volume</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Turnkey deployment roadmap with zero telephony downtime</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { DemoBookingFormData } from '../types';
import { CustomSelect, SelectOption } from './ui/CustomSelect';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Building2,
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

export const DemoModal: React.FC = () => {
  const { isDemoModalOpen, setIsDemoModalOpen, demoPrefillService, submitContactForm } = useWordPressContent();

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

  useEffect(() => {
    if (demoPrefillService) {
      setFormData(prev => ({ ...prev, serviceInterest: demoPrefillService }));
    }
  }, [demoPrefillService]);

  if (!isDemoModalOpen) return null;

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
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      }
    } catch {
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SAMPARK IMPLEMENTATION</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Book a Live Demo
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-medium">
              Experience native voice agents & omnichannel chatbots tailored for your business.
            </p>
          </div>

          <button
            onClick={() => {
              setIsDemoModalOpen(false);
              setSubmitSuccess(null);
            }}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 space-y-4 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h4 className="font-heading font-bold text-xl text-emerald-800 dark:text-emerald-300">
              Demo Confirmed!
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {submitSuccess}
            </p>
            <button
              onClick={() => {
                setIsDemoModalOpen(false);
                setSubmitSuccess(null);
              }}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-bold shadow-xs hover:bg-primary-hover transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errors.form && (
              <div className="p-3 bg-red-500/10 text-red-600 text-xs rounded-xl font-semibold">
                {errors.form}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-foreground">Full Name *</label>
              <input
                type="text"
                placeholder="e.g. Ramesh Patel"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl bg-background border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary font-medium ${
                  errors.fullName ? 'border-red-500' : 'border-border'
                }`}
              />
              {errors.fullName && <p className="text-[11px] text-red-500 font-semibold">{errors.fullName}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-foreground">Business Name *</label>
              <input
                type="text"
                placeholder="e.g. Rajkot Engineering Works"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl bg-background border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary font-medium ${
                  errors.businessName ? 'border-red-500' : 'border-border'
                }`}
              />
              {errors.businessName && <p className="text-[11px] text-red-500 font-semibold">{errors.businessName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">Phone *</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-background border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary font-medium ${
                    errors.phone ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-500 font-semibold">{errors.phone}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">Email *</label>
                <input
                  type="email"
                  placeholder="name@business.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-background border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary font-medium ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500 font-semibold">{errors.email}</p>}
              </div>
            </div>

            {/* Polished Custom Select Dropdown */}
            <CustomSelect
              label="Service Focus *"
              options={serviceOptions}
              value={formData.serviceInterest}
              onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
              id="demo-service-select"
            />

            <div className="space-y-1">
              <label className="text-xs font-bold text-foreground">Message (Optional)</label>
              <textarea
                rows={2}
                placeholder="What is your current inquiry volume or main bottleneck?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary resize-none font-medium"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98 disabled:opacity-60 cursor-pointer group"
              >
                {isSubmitting ? (
                  <span>Scheduling...</span>
                ) : (
                  <>
                    <span>Schedule Free Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

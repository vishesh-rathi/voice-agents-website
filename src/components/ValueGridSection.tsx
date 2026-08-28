import React from 'react';
import { StylishUnderline } from './StylishUnderline';
import { 
  PhoneOff, 
  Zap, 
  CheckCheck, 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  Check 
} from 'lucide-react';

export const ValueGridSection: React.FC = () => {
  return (
    <section id="value-grid-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Practical Impact For Indian Businesses</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            How Sampark <StylishUnderline>Helps Your Business</StylishUnderline>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            Concrete operational outcomes without heavy software reboots. Modernize customer communication with native Voice, WhatsApp, and smart chatbots.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Fewer Missed Calls */}
          <div 
            id="benefit-card-1"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-primary flex items-center justify-center font-bold">
                  <PhoneOff className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  0% Missed
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Fewer Missed Calls
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Native voice agents in all major Indian languages capture 100% of customer inquiries 24/7 so no business lead slips through.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">01</span>
            </div>
          </div>

          {/* Card 2: Faster Response Times */}
          <div 
            id="benefit-card-2"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                  &lt; 15s Replies
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Faster Response Times
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Automate instant WhatsApp and SMS replies within seconds, delighting prospects while their intent is highest.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">02</span>
            </div>
          </div>

          {/* Card 3: Reduced Repetitive Work */}
          <div 
            id="benefit-card-3"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <CheckCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                  80% Automated
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Reduced Repetitive Work
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Offload repetitive order lookups, appointment bookings, and routine FAQs so your desk remains clear.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">03</span>
            </div>
          </div>

          {/* Card 4: Better Customer Experience */}
          <div 
            id="benefit-card-4"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                  4.9/5 CSAT
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Empathetic Dialogues
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Communicate in comfortable local dialects with empathetic, context-aware responses that build long-term trust.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">04</span>
            </div>
          </div>

          {/* Card 5: More Efficient Teams */}
          <div 
            id="benefit-card-5"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                  3x Output
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                More Productive Staff
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empower your core staff to focus on high-ticket sales, patient care, and relationship-driven client closures.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">05</span>
            </div>
          </div>

          {/* Card 6: Enterprise Security & Privacy */}
          <div 
            id="benefit-card-6"
            className="group relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  Data Sovereign
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Enterprise Privacy & Security
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your customer data stays strictly protected with Indian data sovereignty compliance, encrypted storage, and granular access controls.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Check className="w-4 h-4 text-primary" /> Guaranteed Outcome
              </span>
              <span className="font-mono text-muted-foreground font-semibold">06</span>
            </div>
          </div>

        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-semibold text-muted-foreground pt-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground font-medium">All Major Indian Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground font-medium">Zero Telephony Interruption</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground font-medium">Deployment in 7–14 Business Days</span>
          </div>
        </div>

      </div>
    </section>
  );
};

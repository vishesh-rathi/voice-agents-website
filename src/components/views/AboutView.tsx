import React from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { StylishUnderline } from '../StylishUnderline';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Target, 
  Languages, 
  Zap, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { openDemoModalWithService, setCurrentTab } = useWordPressContent();

  return (
    <div id="about-view" className="py-12 lg:py-16 space-y-20">
      
      {/* Hero & Heritage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR MISSION & HERITAGE</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Engineering practical AI for <StylishUnderline>Indian SMBs</StylishUnderline> with measurable impact.
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Sampark Solutions started with a clear observation in Gujarat: while global AI headlines promised revolutions, Indian SMBs were left with complex tools built for Silicon Valley workflows that failed in local languages and real-world operations.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We set out to build an agency focused entirely on practical execution. No speculative jargon, no multi-year R&D delays — just high-performing voice agents, instant WhatsApp automations, and intelligent chatbots that plug directly into existing business systems to cut response times and increase revenue.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-foreground">Rooted in Gujarat</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Built in Ahmedabad with deep context on how regional Indian businesses operate, negotiate, and serve clients.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-foreground">Zero Fluff or AI Hype</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We deploy practical voice agents, WhatsApp flows, and chatbots with clear ROI metrics, not speculative tech demos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Languages className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-foreground">Native-Language First</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  True conversational intelligence tuned to local dialects and nuances, ensuring your customers feel heard and respected.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openDemoModalWithService('About Page Consultation')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 rounded-full text-sm font-bold shadow-xs transition-all active:scale-98 group cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentTab('industries')}
                className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-muted border border-border px-6 py-3.5 rounded-full text-sm font-semibold transition-all group cursor-pointer"
              >
                <span>View Industries We Serve</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-muted-foreground" />
              </button>
            </div>

          </div>

          {/* Right Column: Engineering Team Photo & Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-card border border-border p-6 shadow-xl space-y-6">
              
              {/* Photo Card with location pill */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Sampark Solutions Engineering Team in Gujarat"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Headquartered in Gujarat, India</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="text-sm font-bold">Dedicated AI Engineers</p>
                  </div>
                  <p className="text-xs text-stone-300">
                    Hands-on SMB Implementation Team
                  </p>
                </div>
              </div>

              <div className="p-3 bg-muted/40 rounded-xl border border-border text-xs text-muted-foreground text-center">
                We build reliable tangible, measurable business benefits without tech overwhelm
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 text-center pt-2">
                <div className="p-3 rounded-xl bg-muted/30 border border-border">
                  <div className="font-heading font-black text-lg text-foreground leading-tight">India-first</div>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Built for SMB workflows</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 border border-border">
                  <div className="font-heading font-black text-lg text-primary leading-tight">Ship-first</div>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Practical, not speculative</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/30 border border-border">
                  <div className="font-heading font-black text-lg text-foreground leading-tight">24/7</div>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Automated customer support</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CORE PHILOSOPHY SECTION */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
              <span>OUR CORE PHILOSOPHY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              AI Should Deliver <StylishUnderline>Measurable Value</StylishUnderline>, Not Tech Hype
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We believe Indian SMBs don't need buzzwords. You need dependable automation that answers customer inquiries, captures lost leads, and cuts repetitive manual effort.
            </p>
          </div>

          {/* 4 Metric Boxes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="font-heading font-black text-3xl sm:text-4xl text-foreground leading-tight">
                No hype
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Ship over slides</h4>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Working automation, not decks</p>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed pt-2 border-t border-border/60">
                We deploy systems that answer real calls and resolve real customer inquiries from day one.
              </p>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="font-heading font-black text-3xl sm:text-4xl text-primary leading-tight">
                Native
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Regional fluency</h4>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Voice & WhatsApp in your customer's language</p>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed pt-2 border-t border-border/60">
                Tuned for Indian languages and SMB workflows so customers speak comfortably in their mother tongue.
              </p>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="font-heading font-black text-3xl sm:text-4xl text-foreground leading-tight">
                24/7
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Always-on desk</h4>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Answer after-hours calls too</p>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed pt-2 border-t border-border/60">
                Eliminate hold times and missed inquiries — the AI picks up whether you're open or closed.
              </p>
            </div>

            {/* Box 4 */}
            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="font-heading font-black text-3xl sm:text-4xl text-primary leading-tight">
                Handoff
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Human in the loop</h4>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">AI knows when to escalate</p>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed pt-2 border-t border-border/60">
                Every conversation has escalation rules you configure — the AI knows when to hand a caller to your team.
              </p>
            </div>

          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card border border-border p-6 space-y-2 hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-base text-foreground">Practical Over Experimental</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                We focus on practical automation designed to reduce missed leads, cut manual admin, and improve response times.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 space-y-2 hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Languages className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-base text-foreground">Local Language First</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                True conversational intelligence tuned to colloquial Indian dialects and regional business etiquette.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 space-y-2 hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-base text-foreground">Rapid Deployment</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Seamless rollout integrated directly into your existing setup without rebuilding infrastructure.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

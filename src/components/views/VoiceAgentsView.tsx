import React from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { PredefinedVoiceAgentsSection } from '../PredefinedVoiceAgentsSection';
import { StylishUnderline } from '../StylishUnderline';
import { 
  PhoneCall, 
  Sparkles, 
  Languages, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  HelpCircle, 
  Headphones, 
  BellRing,
  Zap,
  Building,
  Scissors,
  Hotel
} from 'lucide-react';

export const VoiceAgentsView: React.FC = () => {
  const { voiceLanguages } = useWordPressContent();

  const bentoFeatures = [
    {
      id: 'f-1',
      title: 'Native Indian Languages',
      badge: 'All Major Languages',
      desc: 'Engage callers naturally across Hindi, Gujarati, Marathi, Bengali, Tamil, Telugu, Kannada, Punjabi, Malayalam, and Indian English — each with authentic regional phrasing and colloquial accents.'
    },
    {
      id: 'f-2',
      title: '24/7 Call Availability',
      badge: 'Always-On',
      desc: 'Never miss an incoming customer inquiry after office hours, on Sundays, or during festive rush peaks.'
    },
    {
      id: 'f-3',
      title: 'Instant FAQ Resolution',
      badge: 'Knowledge Base',
      desc: 'Answer recurring questions on pricing, clinic timings, store locations, and service details instantly with zero wait time.'
    },
    {
      id: 'f-4',
      title: 'Automated Lead Qualification',
      badge: 'Pipeline Acceleration',
      desc: 'Collect caller intent, budget, timeline, and contact information before routing high-intent deals to your sales team.'
    },
    {
      id: 'f-5',
      title: 'Direct Appointment Bookings',
      badge: 'Calendar & POS Sync',
      desc: 'Schedule consultations, clinic visits, or site inspections directly into your team calendar during the live call.'
    },
    {
      id: 'f-6',
      title: 'Ongoing Customer Support',
      badge: 'First-Call Resolution',
      desc: 'Guide existing customers through order status checks, warranty queries, and routine troubleshooting steps without manual hold times.'
    }
  ];

  return (
    <div id="voice-agents-view" className="py-10 lg:py-14 space-y-16">
      
      {/* Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>VOICE AUTOMATION ENGINE</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.12]">
            Human-like voice conversations<br className="hidden sm:inline" />{" "}
            <StylishUnderline>in your customer's native language</StylishUnderline>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-normal max-w-4xl">
            Sampark Solutions builds conversational voice agents specifically tuned for Indian enterprise & SME workflows. Handle routine phone inquiries, capture qualified leads, and confirm appointments without adding headcount or leaving callers on hold.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {bentoFeatures.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl bg-card border border-border p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {feat.badge}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Predefined Voice Agents Interactive Section */}
      <PredefinedVoiceAgentsSection />

      {/* PAN-INDIA Supported Languages Matrix */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
              <span>PAN-INDIA COVERAGE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              Fluent across all major <StylishUnderline>Indian languages</StylishUnderline>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Engage every caller in their true mother tongue. Sampark builds high-precision voice agents trained for regional idioms, colloquial phrasing, and code-mixed conversations.
            </p>
          </div>

          {/* 9 Language Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {voiceLanguages.map((lang) => (
              <div
                key={lang.id}
                className="bg-card rounded-2xl border border-border p-4 text-center space-y-2 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <div className="text-2xl font-bold font-heading text-primary">
                  {lang.scriptChar}
                </div>
                <h4 className="font-heading font-bold text-base text-foreground">
                  {lang.name}
                </h4>
                <p className="text-xs font-semibold text-muted-foreground">
                  {lang.region}
                </p>
                <span className="inline-block text-xs font-bold px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full">
                  Deployment Ready
                </span>
              </div>
            ))}
            <div className="bg-primary/10 rounded-2xl border border-primary/30 p-4 text-center space-y-2 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold font-heading text-primary">
                +More
              </div>
              <h4 className="font-heading font-bold text-base text-foreground">
                Dialect Adaptable
              </h4>
              <p className="text-xs font-medium text-muted-foreground">
                Custom SME lexicons
              </p>
            </div>
          </div>

          {/* 3 Metric Highlight Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6">
            <div className="rounded-2xl bg-card border border-border p-5 text-center space-y-1 hover:border-primary/30 transition-colors">
              <div className="font-heading font-black text-3xl text-foreground">10+</div>
              <h4 className="font-bold text-sm text-foreground">Indian Languages</h4>
              <p className="text-xs text-muted-foreground">Regional dialects & mixed modes</p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-5 text-center space-y-1 hover:border-primary/30 transition-colors">
              <div className="font-heading font-black text-3xl text-primary">Native</div>
              <h4 className="font-bold text-sm text-foreground">Accent Tuning</h4>
              <p className="text-xs text-muted-foreground">Localized rhythm & colloquial cadences</p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-5 text-center space-y-1 hover:border-primary/30 transition-colors">
              <div className="font-heading font-black text-3xl text-foreground">&lt;350ms</div>
              <h4 className="font-bold text-sm text-foreground">Zero Translation Lag</h4>
              <p className="text-xs text-muted-foreground">Direct speech-to-intent routing</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  PhoneCall, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  Languages,
  Building,
  Scissors,
  Hotel
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { 
    openDemoModalWithService, 
    setCurrentTab, 
    predefinedVoiceAgents,
    activePredefinedAgentId,
    setActivePredefinedAgentId
  } = useWordPressContent();

  const [activeVoiceIdx, setActiveVoiceIdx] = useState(0);
  const [callDuration, setCallDuration] = useState(18);

  // Call duration counter simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => (prev >= 60 ? 12 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeAgent = predefinedVoiceAgents.find(a => a.id === activePredefinedAgentId) || predefinedVoiceAgents[0];

  return (
    <section id="hero-section" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Pan-India AI Automation • Built for Indian Enterprises & SMEs</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.85rem] leading-[1.12] tracking-tight text-foreground">
              Modernizing Enterprise Conversations with <br className="hidden sm:inline" />
              <StylishUnderline>Measurable AI</StylishUnderline> Voice Agents
            </h1>

            {/* Subheading with larger, highly legible font */}
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Sampark Solutions automates high-volume phone inquiries, qualifies high-intent leads, 
              and locks verified bookings 24/7 across all major Indian languages with zero disruption to your telephony.
            </p>

            {/* Action Area */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-book-demo-btn"
                onClick={() => openDemoModalWithService('Native Voice Agents')}
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 rounded-full text-base font-bold tracking-tight shadow-md hover:shadow-lg transition-all active:scale-98 group cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-agents-btn"
                onClick={() => {
                  const section = document.getElementById('predefined-voice-agents-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setCurrentTab('voice-agents');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground hover:bg-muted/80 border border-border px-7 py-4 rounded-full text-base font-bold shadow-xs hover:shadow-sm transition-all group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Test 3 Predefined Agents</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-muted-foreground" />
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border/80">
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-semibold">All Major Indian Languages</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-semibold">Zero Missed Calls 24/7</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-semibold">Instant CRM & WhatsApp Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Spacious & Uncongested Live Agent Preview Hero Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Card Container */}
              <div className="relative rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-2xl shadow-stone-900/5 dark:shadow-black/50 space-y-6">
                
                {/* Agent Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        Voice Agent Connected
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Pan-India Telephony Bridge
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-foreground bg-muted px-2.5 py-1 rounded-md border border-border/60">
                    00:{callDuration < 10 ? `0${callDuration}` : callDuration}
                  </span>
                </div>

                {/* Predefined Agents Selector Chips on Hero */}
                <div className="grid grid-cols-3 gap-2">
                  {predefinedVoiceAgents.map((ag) => {
                    const isSelected = ag.id === activeAgent.id;
                    return (
                      <button
                        key={ag.id}
                        onClick={() => setActivePredefinedAgentId(ag.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-secondary text-secondary-foreground border-secondary shadow-xs'
                            : 'bg-muted/60 text-foreground hover:bg-muted border-border/60'
                        }`}
                      >
                        <p className="text-xs font-bold truncate">
                          {ag.id === 'real-estate' ? 'Real Estate' : ag.id === 'barber' ? "Barber Shop" : 'Hotel Desk'}
                        </p>
                        <p className="text-[10px] opacity-75 truncate">{ag.metrics.resolutionRate}</p>
                      </button>
                    );
                  })}
                </div>

                {/* Hero Active Dialogue Preview Box */}
                <div className="bg-background-subtle rounded-2xl p-4 sm:p-5 border border-border space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5" />
                      <span>{activeAgent.name}</span>
                    </span>
                    <span className="text-[11px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                      &lt;320ms Latency
                    </span>
                  </div>

                  {/* Audio Wave Bars visual */}
                  <div className="flex items-center justify-center gap-1.5 py-2 h-9 bg-card rounded-xl border border-border/60">
                    {[10, 16, 24, 30, 18, 26, 32, 20, 28, 14, 22, 30, 12, 20, 26, 16].map((h, i) => (
                      <span 
                        key={i} 
                        className="w-1 bg-primary rounded-full animate-wave"
                        style={{ 
                          animationDelay: `${i * 0.08}s`,
                          height: `${h}px`
                        }} 
                      />
                    ))}
                  </div>

                  <div className="space-y-1">
                    <p className="font-heading font-bold text-sm sm:text-base text-foreground leading-snug">
                      "{activeAgent.scenarios[0]?.turns[1]?.text || 'Namaste! How may I assist you today?'}"
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {activeAgent.scenarios[0]?.turns[1]?.translation}
                    </p>
                  </div>
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card-muted rounded-xl p-3.5 border border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      {activeAgent.metrics.resolutionRate}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">First-Call Resolution</p>
                      <p className="text-[11px] text-muted-foreground">Automated outcomes</p>
                    </div>
                  </div>

                  <div className="bg-card-muted rounded-xl p-3.5 border border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {activeAgent.metrics.avgHandlingTime}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Handling Speed</p>
                      <p className="text-[11px] text-muted-foreground">Direct calendar locks</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <button
                  onClick={() => {
                    const section = document.getElementById('predefined-voice-agents-section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setCurrentTab('voice-agents');
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary text-secondary-foreground text-xs font-bold hover:bg-secondary-hover transition-colors shadow-xs group cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Run Full Multi-Turn Test for {activeAgent.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


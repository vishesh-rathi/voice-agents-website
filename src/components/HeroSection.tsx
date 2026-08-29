import React, { useState, useEffect } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import {
  ArrowRight,
  Check,
  Sparkles,
  Languages,
  Bot,
  User
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
              <span>Voice AI for India's SMBs</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-5xl leading-[1.12] tracking-tight text-foreground">
              AI that answers every call <br className="hidden sm:inline" />
              in <StylishUnderline>your customer's native language</StylishUnderline>
            </h1>

            {/* Subheading with larger, highly legible font */}
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Sampark answers your customer calls, replies on WhatsApp, and books appointments — around the clock, in 10+ Indian languages. Works with your existing phone number. Live in a week.
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
                <span>Hear a Sample Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-muted-foreground" />
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-y-3 gap-x-6 pt-5 border-t border-border/80">
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-xs shadow-emerald-500/30">
                  <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                </span>
                <span className="font-semibold">All Major Indian Languages</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-xs shadow-emerald-500/30">
                  <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                </span>
                <span className="font-semibold">Answers calls 24/7</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-xs shadow-emerald-500/30">
                  <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                </span>
                <span className="font-semibold">Instant WhatsApp Replies</span>
              </div>
            </div>

          </div>

          {/* Right Column: Spacious & Uncongested Live Agent Preview Hero Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Card Container */}
              <div className="relative rounded-3xl bg-card border border-border p-5 sm:p-5 shadow-2xl shadow-stone-900/5 dark:shadow-black/50 space-y-4">

                {/* Agent Status Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-border">
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
                      </button>
                    );
                  })}
                </div>

                {/* Hero Active Dialogue Preview Box */}
                <div className="bg-background-subtle rounded-2xl p-3.5 sm:p-4 border border-border space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5" />
                      <span className="truncate">{activeAgent.name}</span>
                    </span>
                    <span className="text-[11px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full shrink-0">
                      Live
                    </span>
                  </div>

                  {/* Audio Wave Bars visual */}
                  <div className="flex items-center justify-center gap-1 py-2 h-9 bg-card rounded-lg border border-border/60">
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

                  <div className="space-y-2.5">
                    {activeAgent.scenarios[0]?.turns[0] && (
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-foreground leading-snug">
                            "{activeAgent.scenarios[0].turns[0].text}"
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-xs sm:text-sm text-foreground leading-snug">
                          "{activeAgent.scenarios[0]?.turns[1]?.text || 'Namaste! How may I assist you today?'}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-card-muted rounded-xl p-2.5 border border-border flex items-center gap-2.5">
                    <div className="min-w-9 h-9 px-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 whitespace-nowrap">
                      {activeAgent.metrics.resolutionRate}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-foreground truncate">Automation Coverage</p>
                      <p className="text-[11px] text-muted-foreground truncate">Handled without escalation</p>
                    </div>
                  </div>

                  <div className="bg-card-muted rounded-xl p-2.5 border border-border flex items-center gap-2.5">
                    <div className="min-w-9 h-9 px-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 whitespace-nowrap">
                      {activeAgent.metrics.avgHandlingTime}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-foreground truncate">Handling Speed</p>
                      <p className="text-[11px] text-muted-foreground truncate">Direct calendar locks</p>
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
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-secondary text-secondary-foreground text-[11px] sm:text-xs font-bold hover:bg-secondary-hover transition-colors shadow-xs group cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span>Hear Sample</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


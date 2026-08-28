import React, { useState } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import { IndustrySolution } from '../types';
import { 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const { industrySolutions, openDemoModalWithService, setCurrentTab } = useWordPressContent();
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySolution | null>(null);

  return (
    <section id="industries-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <span>PRACTICAL SECTOR FIT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Built for how <StylishUnderline>Indian businesses</StylishUnderline> actually operate
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            From busy regional clinics to bustling retail storefronts, our voice agents and WhatsApp workflows are tuned for real customer speech, dialect nuances, and day-to-day SME workflows.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {industrySolutions.map((industry) => (
            <div
              key={industry.id}
              id={`industry-card-${industry.id}`}
              className="group relative rounded-2xl bg-card border border-border/80 overflow-hidden flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Photo & Tag Header */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-xs">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      {industry.badge}
                    </span>
                  </div>

                  {/* Highlight Stat Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white inline-block border border-white/10">
                      {industry.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tags and Setup Link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-primary" /> Voice
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-emerald-500" /> WhatsApp
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedIndustry(industry)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-primary hover:underline transition-colors"
                  >
                    <span>See setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-card border border-border/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">
              Do not see your exact business sector?
            </h4>
            <p className="text-muted-foreground text-sm mt-1">
              We design custom conversational workflows for high-volume inquiries and native-language desk operations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setCurrentTab('industries')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80 px-6 py-3 rounded-full text-sm font-semibold transition-all group cursor-pointer"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-muted-foreground" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal for "See setup" details */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase">
                  {selectedIndustry.badge}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-foreground mt-2">
                  {selectedIndustry.title} Workflow
                </h3>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {selectedIndustry.description}
            </p>

            {/* Features Checklist */}
            <div className="space-y-2.5 bg-muted/40 p-4 rounded-xl border border-border/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Key Integration Capabilities
              </h4>
              {selectedIndustry.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Sample Voice & WhatsApp Conversation */}
            <div className="space-y-3 bg-card-muted p-4 rounded-xl border border-border/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Sample Multilingual Interaction
              </h4>
              
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="bg-muted p-2.5 rounded-lg">
                  <span className="font-bold text-foreground">Caller/Customer: </span>
                  <span className="italic text-foreground/90">"{selectedIndustry.sampleWorkflow.caller}"</span>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-lg">
                  <span className="font-bold text-primary">Sampark AI Agent: </span>
                  <span className="text-foreground">"{selectedIndustry.sampleWorkflow.aiResponse}"</span>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg text-emerald-800 dark:text-emerald-300 text-xs">
                  <span className="font-bold">System Outcome: </span>
                  {selectedIndustry.sampleWorkflow.outcome}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-muted"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedIndustry.title;
                  setSelectedIndustry(null);
                  openDemoModalWithService(`${title} Workflow`);
                }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-5 py-2 rounded-xl text-sm font-bold shadow-xs transition-all"
              >
                <span>Book Demo for {selectedIndustry.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

import React from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import { 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  Workflow, 
  ArrowUpRight
} from 'lucide-react';
import { CapabilityCard } from '../types';

export const CapabilitiesSection: React.FC = () => {
  const { capabilities, setCurrentTab } = useWordPressContent();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      default: return <Bot className="w-5 h-5" />;
    }
  };

  return (
    <section id="capabilities-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Practical AI agents built for <StylishUnderline>real business operations</StylishUnderline>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            Deploy voice and chat agents that understand regional Indian languages, connect with your existing tools, and resolve customer requests without manual overhead.
          </p>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              id={`capability-card-${cap.id}`}
              className="group relative rounded-2xl bg-card border border-border p-7 lg:p-8 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-105 shrink-0">
                    {getIcon(cap.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {cap.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60">
                <button
                  onClick={() => setCurrentTab(cap.route)}
                  className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors py-1 cursor-pointer"
                >
                  <span>Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

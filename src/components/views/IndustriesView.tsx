import React from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { IndustriesSection } from '../IndustriesSection';
import { StylishUnderline } from '../StylishUnderline';
import { Building2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesView: React.FC = () => {
  const { openDemoModalWithService } = useWordPressContent();

  return (
    <div id="industries-view" className="py-12 space-y-12">
      
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>CROSS-SECTOR SOLUTIONS</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
            Practical AI Workflows for <StylishUnderline>Indian Business Operations</StylishUnderline>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-normal">
            Every sector handles customer inquiries differently. We integrate native-language voice bots, WhatsApp workflows, and website assistants tailored to your specific operational realities without replacing your core systems.
          </p>
        </div>
      </section>

      {/* Render full industries grid with interactive setup modal */}
      <IndustriesSection />

    </div>
  );
};

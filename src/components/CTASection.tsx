import React from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { ArrowRight, Zap, Languages, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { openDemoModalWithService } = useWordPressContent();

  return (
    <section id="cta-section" className="py-20 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-secondary text-secondary-foreground p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>PRACTICAL AI IMPLEMENTATION</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to Modernize Your Customer Operations?
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Empower your business with native-language voice agents, automated WhatsApp workflows, and hands-on AI consulting built specifically for Indian operations.
            </p>

            {/* Clean CTA Action Button */}
            <div className="flex items-center justify-center pt-4">
              <button
                id="cta-book-demo-btn"
                onClick={() => openDemoModalWithService('Full Operations Modernization')}
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground hover:bg-primary-hover px-9 py-4 rounded-full text-base font-bold tracking-tight shadow-md hover:shadow-lg transition-all active:scale-98 group cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Pillars Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-8 border-t border-white/10 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Rapid Deployment</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Live in 7–14 business days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Native Voice & Chat</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Major Indian languages</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 text-orange-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Measurable Impact</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Clear ROI guarantee</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


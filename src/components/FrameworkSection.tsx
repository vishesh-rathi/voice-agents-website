import React from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';

export const FrameworkSection: React.FC = () => {
  const { deploymentSteps } = useWordPressContent();

  return (
    <section id="framework-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <span>IMPLEMENTATION FRAMEWORK</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            How We Deploy <StylishUnderline>Practical AI</StylishUnderline> For Your Business
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            A clear, results-first approach tailored for Indian enterprises and SMEs. We get your intelligent voice and chat agents running smoothly without disrupting your daily business operations.
          </p>
        </div>

        {/* 4 Step Cards (01 -> 04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deploymentSteps.map((step) => (
            <div
              key={step.stepNumber}
              id={`framework-step-${step.stepNumber}`}
              className="relative rounded-2xl bg-card border border-border p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border/60">
                  <span className="font-mono text-2xl font-black text-primary">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase px-2.5 py-0.5 rounded-md bg-muted">
                    {step.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{step.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

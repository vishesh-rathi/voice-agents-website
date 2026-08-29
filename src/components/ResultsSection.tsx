import React from 'react';
import { StylishUnderline } from './StylishUnderline';
import {
  TrendingUp,
  Clock,
  PhoneIncoming,
  MessageSquare
} from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const statCards = [
    {
      metric: '68%',
      label: 'Drop in Missed Calls',
      desc: 'Voice agents pick up 24/7 across all major Indian languages.',
      icon: <PhoneIncoming className="w-5 h-5" />
    },
    {
      metric: '< 15s',
      label: 'First Response Speed',
      desc: 'Instant WhatsApp and web query replies without staff delays.',
      icon: <Clock className="w-5 h-5" />
    },
    {
      metric: '3.4x',
      label: 'Lead Follow-up Rate',
      desc: 'Automated SMS and chat nurtures turn inquiries into booked clients.',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      metric: '25+ hrs',
      label: 'Saved Per Week',
      desc: 'Repetitive front-desk questions resolved automatically.',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <section id="results-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <span>WHAT GOOD LOOKS LIKE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Outcomes We <StylishUnderline>Design For</StylishUnderline>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            Practical AI tools built to reduce missed leads, answer customer questions in local languages, and cut manual admin.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, i) => (
            <div
              key={i}
              id={`stat-card-${i}`}
              className="rounded-2xl bg-card border border-border p-6 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="font-heading font-black text-3xl sm:text-4xl text-foreground tracking-tight">
                  {stat.metric}
                </div>
                <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mt-4 pt-4 border-t border-border/60">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          Target benchmarks based on industry data and pilot design. Actual outcomes vary by business, call volume, and integration scope.
        </p>

      </div>
    </section>
  );
};

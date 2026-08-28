import React from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import { 
  TrendingUp, 
  Clock, 
  PhoneIncoming, 
  MessageSquare, 
  Star, 
  MapPin
} from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const { testimonials } = useWordPressContent();

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
            <span>PROVEN BUSINESS IMPACT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Real Results for <StylishUnderline>Growing Businesses</StylishUnderline>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            Practical AI tools that solve real operational headaches — reducing missed leads, answering customer questions in local languages, and cutting manual admin.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Testimonials Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pt-6 border-t border-border/60">
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground">
              What Business Owners Say
            </h3>
            <p className="text-muted-foreground text-sm">
              Feedback from enterprises running live automations with Sampark Solutions.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-foreground shadow-2xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span>5.0 Verified Client Satisfaction</span>
          </div>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="rounded-2xl bg-card border border-border p-6 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-xs"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
                  {t.highlightMetric}
                </span>
                <p className="text-foreground/90 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">
                    {t.author}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t.role} • {t.company}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

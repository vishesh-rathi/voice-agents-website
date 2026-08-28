import React from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { StylishUnderline } from '../StylishUnderline';
import { 
  Workflow, 
  Search, 
  Map, 
  Cpu, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';

export const ConsultingView: React.FC = () => {
  const { consultingSteps, openDemoModalWithService } = useWordPressContent();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-primary" />;
      case 'Map': return <Map className="w-5 h-5 text-primary" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-primary" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-primary" />;
      case 'Users': return <Users className="w-5 h-5 text-primary" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-primary" />;
      default: return <Workflow className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div id="consulting-view" className="py-12 lg:py-16 space-y-16">
      
      {/* Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>PRACTICAL AI CONSULTING</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
            Modernize Workflows with <StylishUnderline>Practical Automation</StylishUnderline>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-normal">
            At Sampark Solutions, we steer clear of abstract buzzwords and untested technology. We help Indian SMEs identify high-impact operational friction, build tailored automations, and track concrete, measurable returns from day one.
          </p>

          {/* 3 Top Value Points */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>No speculative AI hype — only vetted, revenue-generating workflows</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>Designed specifically for regional Indian business operations</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>Seamless WhatsApp, CRM, and telephony system integration</span>
            </div>
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {consultingSteps.map((s) => (
            <div
              key={s.id}
              id={`consulting-card-${s.id}`}
              className="rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold">
                    {getStepIcon(s.icon)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {s.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 text-xs font-semibold text-foreground">
                <span className="text-primary font-bold">Key outcome: </span>
                <span>{s.keyOutcome}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

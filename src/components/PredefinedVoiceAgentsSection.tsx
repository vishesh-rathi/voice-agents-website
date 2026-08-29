import React, { useState } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { StylishUnderline } from './StylishUnderline';
import { 
  Building, 
  Scissors, 
  Hotel, 
  Play, 
  Volume2,
  VolumeX,
  Sparkles, 
  CheckCircle2, 
  Languages, 
  Clock, 
  ShieldCheck,
  Bot
} from 'lucide-react';
import { PredefinedVoiceAgent } from '../types';

export const PredefinedVoiceAgentsSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { 
    predefinedVoiceAgents, 
    setIsVoiceSimulatorOpen,
    openDemoModalWithService 
  } = useWordPressContent();

  const [playingAgentId, setPlayingAgentId] = useState<string | null>(null);

  const getAgentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-6 h-6" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6" />;
      default:
        return <Bot className="w-6 h-6" />;
    }
  };

  const handleTestAgent = (agent: PredefinedVoiceAgent) => {
    const sampleTurn = agent.scenarios[0]?.turns[1];
    const textToSpeak = sampleTurn?.text || `${agent.name} is ready to handle your business calls.`;
    const lang = agent.scenarios[0]?.language.toLowerCase().includes('hindi') 
      ? 'hi-IN' 
      : agent.scenarios[0]?.language.toLowerCase().includes('gujarati') 
        ? 'gu-IN' 
        : 'en-IN';

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (playingAgentId === agent.id) {
        setPlayingAgentId(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = lang;
      utterance.rate = 0.95;
      setPlayingAgentId(agent.id);

      utterance.onend = () => setPlayingAgentId(null);
      utterance.onerror = () => setPlayingAgentId(null);

      window.speechSynthesis.speak(utterance);
    } else {
      setIsVoiceSimulatorOpen(true);
    }
  };

  return (
    <section id="predefined-voice-agents-section" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRE-TRAINED & INDUSTRY TESTED</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
            Ready-to-Deploy <StylishUnderline>Multilingual Voice Agents</StylishUnderline>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            Experience how our conversational voice agents handle real customer inquiries, scheduling logic, and follow-ups in regional Indian languages.
          </p>
        </div>

        {/* 3 Predefined Agents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {predefinedVoiceAgents.map((agent) => {
            const isPlaying = playingAgentId === agent.id;
            const primaryScenario = agent.scenarios[0];

            return (
              <div
                key={agent.id}
                id={`agent-card-${agent.id}`}
                className="bg-card border border-border rounded-2xl p-7 flex flex-col justify-between hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold transition-transform group-hover:scale-105">
                      {getAgentIcon(agent.icon)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                      {agent.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {agent.tagline}
                    </p>
                  </div>

                  {/* Languages supported */}
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium bg-muted/60 px-3 py-2 rounded-lg border border-border/60">
                    <Languages className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{agent.supportedLanguages.join(' • ')}</span>
                  </div>

                  {/* Live Sample Dialogue Preview */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                      <span>Sample ({primaryScenario?.language})</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">Live</span>
                    </div>
                    <p className="text-xs text-foreground font-medium italic leading-relaxed">
                      "{primaryScenario?.turns[1]?.text || 'Namaste! How may I assist you today?'}"
                    </p>
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/60 text-center">
                    <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                      <p className="text-xs text-muted-foreground font-medium">Coverage</p>
                      <p className="font-heading font-bold text-base text-foreground mt-0.5">{agent.metrics.resolutionRate}</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                      <p className="text-xs text-muted-foreground font-medium">Avg Speed</p>
                      <p className="font-heading font-bold text-base text-primary mt-0.5">{agent.metrics.avgHandlingTime}</p>
                    </div>
                  </div>

                </div>

                {/* Only the Test Agent Button */}
                <div className="pt-6 mt-6 border-t border-border/60">
                  <button
                    onClick={() => handleTestAgent(agent)}
                    id={`test-agent-btn-${agent.id}`}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs active:scale-98 ${
                      isPlaying
                        ? 'bg-primary text-primary-foreground animate-pulse'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover hover:text-white'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        <span>Stop Voice Sample</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Test Agent</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

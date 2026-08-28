import React, { useState } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { 
  X, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Play, 
  Languages, 
  CheckCircle2, 
  ArrowRight,
  Headphones
} from 'lucide-react';

export const VoiceSimulatorModal: React.FC = () => {
  const { 
    isVoiceSimulatorOpen, 
    setIsVoiceSimulatorOpen, 
    voiceLanguages,
    openDemoModalWithService 
  } = useWordPressContent();

  const [selectedLang, setSelectedLang] = useState(voiceLanguages[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isVoiceSimulatorOpen) return null;

  const handlePlay = (text: string, langCode: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (!isPlaying) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 0.95;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        setIsPlaying(true);
        window.speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-primary flex items-center justify-center font-bold">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                VOICE SYNTHESIZER ENGINE
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground">
                Pan-India Dialect Simulator
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              window.speechSynthesis?.cancel();
              setIsVoiceSimulatorOpen(false);
            }}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 9 Languages Selector Grid */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Select Indian Language / Region
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {voiceLanguages.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setSelectedLang(l);
                  if (isPlaying) {
                    window.speechSynthesis?.cancel();
                    setIsPlaying(false);
                  }
                }}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  selectedLang.id === l.id
                    ? 'bg-primary/10 border-primary text-primary font-bold shadow-xs'
                    : 'bg-muted/40 border-border text-foreground hover:bg-muted'
                }`}
              >
                <div className="text-lg font-heading">{l.scriptChar}</div>
                <div className="text-[11px] truncate">{l.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Player Card */}
        <div className="bg-background-subtle rounded-2xl p-5 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">
              {selectedLang.name} — {selectedLang.region}
            </span>
            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-md font-bold">
              Sub-350ms Audio Latency
            </span>
          </div>

          <div className="flex items-center justify-center gap-1 h-10 bg-card rounded-lg border border-border/60 px-3">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 bg-primary rounded-full transition-all duration-200"
                style={{
                  height: isPlaying ? `${(Math.sin(i + Date.now() / 200) + 1) * 12 + 4}px` : '4px',
                  opacity: isPlaying ? 0.9 : 0.3
                }}
              />
            ))}
          </div>

          <div className="space-y-1">
            <p className="font-heading font-bold text-base sm:text-lg text-foreground">
              "{selectedLang.sampleAudioText}"
            </p>
            <p className="text-xs text-muted-foreground italic">
              Meaning: {selectedLang.translation}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => handlePlay(selectedLang.sampleAudioText, selectedLang.code)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-5 py-2 rounded-xl text-xs font-bold shadow-xs transition-all"
            >
              {isPlaying ? <VolumeX className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Stop Voice' : `Speak in ${selectedLang.name}`}</span>
            </button>

            <button
              onClick={() => handlePlay(selectedLang.sampleVoicePrompt, selectedLang.code)}
              className="text-xs font-semibold text-primary hover:underline"
            >
              Play Full Dialogue Sample →
            </button>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={() => {
              window.speechSynthesis?.cancel();
              setIsVoiceSimulatorOpen(false);
            }}
            className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted rounded-xl"
          >
            Close
          </button>
          <button
            onClick={() => {
              setIsVoiceSimulatorOpen(false);
              openDemoModalWithService(`${selectedLang.name} Voice Agent`);
            }}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary-hover px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs"
          >
            <span>Book Demo for {selectedLang.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

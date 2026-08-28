import React, { useState } from 'react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { StylishUnderline } from '../StylishUnderline';
import { 
  MessageSquare, 
  Sparkles, 
  Send, 
  CheckCheck, 
  Zap, 
  ArrowRight, 
  FileText, 
  Clock, 
  Layers, 
  Bot, 
  Share2, 
  CalendarCheck,
  PhoneCall
} from 'lucide-react';

export const WhatsAppAIView: React.FC = () => {
  const { openDemoModalWithService } = useWordPressContent();

  const [activeTab, setActiveTab] = useState<'real-estate' | 'retail' | 'clinic'>('real-estate');
  const [customMsg, setCustomMsg] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', time: '10:14 AM', text: 'Hi, can I get details for the 3BHK flat on SG Highway?' },
    { 
      id: 2, 
      sender: 'bot', 
      time: '10:14 AM', 
      text: 'Namaste! Sure thing. 3BHK units start at ₹1.15 Cr with 1850 sq.ft living area and club amenities.',
      card: {
        title: 'Vrundavan Heights Brochure.pdf',
        size: '3.8 MB • Instant Download',
        linkText: 'Download Brochure'
      }
    },
    { 
      id: 3, 
      sender: 'bot', 
      time: '10:15 AM', 
      text: 'Would you like to schedule a site visit this Saturday or Sunday morning?' 
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      time: 'Just now',
      text: customMsg
    };

    setMessages(prev => [...prev, newMsg]);
    setCustomMsg('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          time: 'Just now',
          text: 'Thank you! Our WhatsApp specialist has logged your request and sent a calendar invite. We can seamlessly communicate across all major Indian languages.'
        }
      ]);
    }, 900);
  };

  return (
    <div id="whatsapp-ai-view" className="py-12 lg:py-16 space-y-20">
      
      {/* Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>INSTANT ENGAGEMENT & AUTOMATION</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Automate WhatsApp customer journeys <StylishUnderline>without losing the human touch.</StylishUnderline>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-normal">
              Turn India's most popular messaging app into an always-active sales and customer support channel. Qualify leads, share brochures, resolve repetitive questions, and trigger reminders automatically across all major Indian languages.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openDemoModalWithService('WhatsApp & SMS Automation')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 rounded-full text-base font-bold shadow-md transition-all active:scale-98 group cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Simulated WhatsApp Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-card border border-border shadow-2xl overflow-hidden max-w-md mx-auto">
              
              {/* WhatsApp App Bar */}
              <div className="bg-[#008069] dark:bg-[#1F2C34] text-white p-4 flex items-center justify-between border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 dark:bg-emerald-700 flex items-center justify-center font-bold text-white shadow-xs border border-emerald-400/40">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5 text-white">
                      Sampark AI Bot
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    </h3>
                    <p className="text-xs text-emerald-100 dark:text-emerald-200">
                      Official WhatsApp Business API
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-black/20 dark:bg-white/10 px-3 py-1 rounded-md text-white font-mono font-semibold">
                  Verified
                </span>
              </div>

              {/* Chat Canvas */}
              <div className="bg-[#EFEAE2] dark:bg-[#0B141A] p-4 sm:p-5 min-h-[320px] max-h-[380px] overflow-y-auto space-y-3 border-x border-border/30">
                <div className="text-center my-1">
                  <span className="text-[11px] bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full text-stone-700 dark:text-stone-300 font-medium">
                    Messages are encrypted & AI-assisted
                  </span>
                </div>

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm shadow-xs ${
                        m.sender === 'user'
                          ? 'bg-[#D9FDD3] dark:bg-[#005C4B] text-[#111B21] dark:text-[#E9EDEF] rounded-br-none border border-emerald-500/20'
                          : 'bg-[#FFFFFF] dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF] rounded-bl-none border border-black/10 dark:border-white/5'
                      }`}
                    >
                      <p className="leading-relaxed font-normal">{m.text}</p>
                      
                      {m.card && (
                        <div className="mt-2.5 bg-[#F0F2F5] dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#2A3942] rounded-xl p-2.5 flex items-center gap-2.5">
                          <FileText className="w-6 h-6 text-[#008069] dark:text-[#00A884] shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-xs truncate text-[#111B21] dark:text-[#E9EDEF]">{m.card.title}</p>
                            <p className="text-[11px] text-[#667781] dark:text-[#8696A0]">{m.card.size}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-end gap-1 mt-1 text-[11px] text-[#667781] dark:text-[#8696A0]">
                        <span>{m.time}</span>
                        {m.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Send Box */}
              <form onSubmit={handleSendMessage} className="p-3 bg-[#F0F2F5] dark:bg-[#1F2C34] border-t border-border flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message in English or Gujarati..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="flex-1 bg-white dark:bg-[#2A3942] border border-black/10 dark:border-transparent rounded-full px-4 py-2 text-xs sm:text-sm text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#667781] dark:placeholder:text-[#8696A0] focus:outline-hidden focus:ring-2 focus:ring-[#008069]"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-full bg-[#008069] dark:bg-[#00A884] hover:opacity-90 text-white dark:text-[#111B21] flex items-center justify-center shrink-0 shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">Under 15-Second Lead Capture</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect your Meta ad campaigns, website forms, and QR codes directly into an automated WhatsApp qualification sequence.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">PDF Catalog & Brochure Push</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Send rich product PDFs, price lists, and clinic packages directly into the chat based on customer keywords.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 space-y-3 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">Automated Follow-ups & Reminders</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nurture unconfirmed leads, send appointment reminders 2 hours prior, and recover abandoned inquiries automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

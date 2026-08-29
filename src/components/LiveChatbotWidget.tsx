import React, { useState } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Languages, 
  CheckCheck, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const LiveChatbotWidget: React.FC = () => {
  const { openDemoModalWithService } = useWordPressContent();
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Sampark Solutions. How can I help you modernize your customer calls or WhatsApp inquiries today?',
      time: 'Just now'
    }
  ]);

  const quickFaqs = [
    'How does Gujarati Voice AI work?',
    'What is the pricing for SMBs?',
    'How long does deployment take?',
    'Book a live demo'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Generate intelligent responses
    setTimeout(() => {
      let botResponse = '';
      const lower = text.toLowerCase();

      if (lower.includes('gujarati') || lower.includes('language') || lower.includes('hindi')) {
        botResponse = 'Our voice agents are natively trained on Gujarati, Hindi, Marathi, and 7+ other Indian languages with colloquial phrasing, regional accents, and zero translation delay.';
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost')) {
        botResponse = 'We offer practical, flat SMB pricing tailored to your expected call/chat volume with zero hidden infrastructure costs. Most setups pay back their investment in under 30 days.';
      } else if (lower.includes('deploy') || lower.includes('time') || lower.includes('setup')) {
        botResponse = 'Deployment is turnkey! Our engineering team configures, tests, and connects your voice agents and WhatsApp bots within 7 business days with zero phone system downtime.';
      } else if (lower.includes('demo') || lower.includes('book')) {
        botResponse = 'Great! I can open our priority demo calendar for you right now so our Gujarat AI specialists can walk you through a tailored simulation.';
        openDemoModalWithService('Live Chatbot Inquirer');
      } else {
        botResponse = 'Thank you for reaching out! We build native voice agents and WhatsApp automations for Indian SMBs. Would you like to schedule a 15-minute live demo?';
      }

      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, reply]);
    }, 600);
  };

  return (
    <div id="live-chatbot-container" className="fixed bottom-5 right-5 z-40">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          id="open-chatbot-btn"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 bg-primary text-primary-foreground p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-heading font-bold text-sm tracking-tight">
            Chat with AI Specialist
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-stone-900"></span>
          </span>
        </button>
      )}

      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200 max-h-[560px]">
          
          {/* Header */}
          <div className="bg-secondary text-secondary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Sampark AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                </h4>
                <p className="text-[11px] text-stone-300">
                  Speaks Gujarati, Hindi & English
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 overflow-y-auto space-y-3 bg-background-subtle/50 flex-1 min-h-[260px] max-h-[340px]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm shadow-2xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none font-medium'
                      : 'bg-card border border-border/80 text-foreground rounded-bl-none'
                  }`}
                >
                  {m.text}
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {m.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Chips */}
          <div className="p-2.5 bg-card border-t border-border flex items-center gap-1.5 overflow-x-auto text-[11px]">
            {quickFaqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSend(faq)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground font-medium shrink-0"
              >
                {faq}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-card border-t border-border flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about our AI agents..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-muted/60 border border-border rounded-full px-4 py-2 text-xs text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shrink-0 shadow-xs transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useWordPressContent } from '../../providers/WordPressContentProvider';
import { StylishUnderline } from '../StylishUnderline';
import { 
  Bot, 
  MessageSquare, 
  Smartphone, 
  Code2, 
  Sparkles, 
  Send, 
  CheckCheck, 
  Zap, 
  ArrowRight, 
  FileText, 
  Clock, 
  Layers, 
  Languages, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  Database,
  ExternalLink,
  ChevronRight,
  Globe,
  Settings
} from 'lucide-react';

export const ChatbotsView: React.FC = () => {
  const { openDemoModalWithService } = useWordPressContent();

  // Multi-Channel Interactive Simulator State
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'web' | 'sms'>('whatsapp');
  
  // WhatsApp Simulator State
  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [whatsappMessages, setWhatsappMessages] = useState([
    { id: 1, sender: 'user', time: '10:14 AM', text: 'Hi! Can I get the price list and brochure for Vrundavan Heights 3BHK flats?' },
    { 
      id: 2, 
      sender: 'bot', 
      time: '10:14 AM', 
      text: 'Namaste! Sure thing. 3BHK premium units start at ₹1.15 Cr with 1,850 sq.ft carpet area, clubhouse amenities, and EV charging points.',
      card: {
        title: 'Vrundavan_Heights_Brochure.pdf',
        size: '3.8 MB • Instant PDF',
        linkText: 'Download Brochure'
      }
    },
    { 
      id: 3, 
      sender: 'bot', 
      time: '10:15 AM', 
      text: 'Would you like to schedule a site visit this Saturday or Sunday morning? We can arrange a guided tour.' 
    }
  ]);

  // Website Chatbot Simulator State
  const [webChatMsg, setWebChatMsg] = useState('');
  const [webChatMessages, setWebChatMessages] = useState([
    { id: 1, sender: 'bot', time: 'Just now', text: 'Welcome to Apex Industrial Solutions! How can we assist your business today?' },
    { id: 2, sender: 'user', time: 'Just now', text: 'Do you provide CNC machine maintenance services in Rajkot and Ahmedabad?' },
    { id: 3, sender: 'bot', time: 'Just now', text: 'Yes, we have local engineering teams in both Rajkot (Aji GIDC) and Ahmedabad (Sanand). We offer emergency breakdown dispatch and annual maintenance contracts (AMC).' }
  ]);

  // SMS Simulator State
  const [smsScenario, setSmsScenario] = useState<'booking' | 'otp' | 'dispatch'>('booking');

  // Integration Code Snippet Tab
  const [activeCodeTab, setActiveCodeTab] = useState<'wordpress' | 'shopify' | 'react' | 'webflow'>('wordpress');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMsg.trim()) return;

    const userText = whatsappMsg;
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      time: 'Just now',
      text: userText
    };

    setWhatsappMessages(prev => [...prev, newMsg]);
    setWhatsappMsg('');

    setTimeout(() => {
      setWhatsappMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          time: 'Just now',
          text: `Thank you! Our WhatsApp engine has recorded: "${userText}". We support seamless conversations in Hindi, Gujarati, Marathi, Bengali, Tamil, Telugu, and English!`
        }
      ]);
    }, 700);
  };

  const handleSendWebChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!webChatMsg.trim()) return;

    const userText = webChatMsg;
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      time: 'Just now',
      text: userText
    };

    setWebChatMessages(prev => [...prev, newMsg]);
    setWebChatMsg('');

    setTimeout(() => {
      setWebChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          time: 'Just now',
          text: `Got it! We've captured your inquiry: "${userText}". In a live setup, our bot verifies your phone number, logs lead details in your CRM/Sheets, and alerts your sales manager instantly.`
        }
      ]);
    }, 700);
  };

  const codeSnippets: Record<string, { title: string; filename: string; code: string; note: string }> = {
    wordpress: {
      title: 'WordPress & WooCommerce',
      filename: 'functions.php or Header Footer Code Manager',
      code: `<!-- Sampark AI Omnichannel Chatbot for WordPress -->
<script 
  src="https://cdn.samparksolutions.in/widget/v2/sampark-chat.js" 
  data-agent-id="spk_live_wp_9842" 
  data-channels="whatsapp,web,sms" 
  data-primary-lang="gu,hi,en" 
  async>
</script>`,
      note: 'Paste into Header Footer Code Manager plugin or your child theme’s header. Works seamlessly with Elementor, Divi, and WooCommerce product pages.'
    },
    shopify: {
      title: 'Shopify Store',
      filename: 'layout/theme.liquid',
      code: `<!-- Sampark AI Chatbot & WhatsApp Assistant for Shopify -->
<script 
  src="https://cdn.samparksolutions.in/widget/v2/sampark-shopify.js" 
  data-store-id="{{ shop.permanent_domain }}" 
  data-agent-id="spk_live_shop_7721" 
  defer>
</script>`,
      note: 'Paste right before the closing </body> tag in theme.liquid. Automatically connects product catalog, order status tracking, and cart abandonment triggers.'
    },
    react: {
      title: 'Next.js, React & Remix',
      filename: 'components/SamparkChatbot.tsx',
      code: `import Script from 'next/script';

export function SamparkChatWidget() {
  return (
    <Script
      src="https://cdn.samparksolutions.in/widget/v2/sampark-chat.js"
      strategy="lazyOnload"
      data-agent-id="spk_live_react_1092"
      data-theme="auto"
    />
  );
}`,
      note: 'Drop into your root layout (app/layout.tsx or _app.tsx). Zero bundle size overhead, fully responsive, and works with dark/light themes.'
    },
    webflow: {
      title: 'Webflow, Wix & Custom HTML',
      filename: 'Site Settings > Custom Code > Footer Code',
      code: `<!-- Sampark AI Embed Code -->
<script 
  src="https://cdn.samparksolutions.in/widget/v2/sampark-chat.js" 
  data-agent-id="spk_live_custom_5510" 
  data-position="bottom-right" 
  async>
</script>`,
      note: 'Paste in Project Settings > Custom Code (Footer Code) or before </body> in your static HTML pages. Loads asynchronously without slowing down page load.'
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div id="chatbots-view" className="py-12 lg:py-16 space-y-24">
      
      {/* Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>UNIFIED OMNICHANNEL CONVERSATIONAL AI</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.12]">
            WhatsApp, SMS & Website Chatbots<br className="hidden md:inline" />{" "}
            <StylishUnderline>built into one unified engine.</StylishUnderline>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-normal max-w-4xl">
            Automate customer inquiries across India's most popular messaging channels and your pre-built website. Qualify leads, dispatch instant brochures, send transactional SMS confirmations, and provide 24/7 support in all major Indian languages.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => openDemoModalWithService('Omnichannel Chatbots (WhatsApp, SMS & Web)')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 rounded-full text-base font-bold shadow-md transition-all active:scale-98 group cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#prebuilt-integrations"
              className="inline-flex items-center gap-2 bg-card hover:bg-muted/60 border border-border text-foreground px-6 py-3.5 rounded-full text-sm font-bold shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span>Explore 1-Minute Website Embeds</span>
            </a>
          </div>
        </div>

        {/* 3 Core Channel Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          
          {/* Pillar 1: WhatsApp Business Automation */}
          <div className="rounded-3xl bg-card border border-border/90 p-7 lg:p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xs group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  98% Open Rate
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                WhatsApp AI Automation
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                Official Meta WhatsApp Cloud API integration. Automatically answer incoming inquiries, share PDF catalogs and brochures, qualify buyer budgets, and trigger live agent handoffs when needed.
              </p>

              <ul className="space-y-2 pt-2 text-xs font-medium text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instant PDF brochure & quotation dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Green tick verified business number support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Interactive button messages & UPI payment links</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>WhatsApp Cloud API</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Pre-Built Website Chatbots */}
          <div className="rounded-3xl bg-card border border-border/90 p-7 lg:p-8 flex flex-col justify-between hover:border-primary/50 transition-all shadow-xs group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  1-Line Embed
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                Pre-Built Website Chatbots
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                Drop onto your existing WordPress, Shopify, Next.js, Webflow, or custom site without redesigning anything. Educates visitors on your exact products, captures verified phone numbers, and routes leads in real time.
              </p>

              <ul className="space-y-2 pt-2 text-xs font-medium text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>WordPress, Shopify, Webflow & Wix compatibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Custom branded theme matching your colors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Zero code rewrite or page speed slowdown</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
              <span>Universal Web Widget</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: SMS & Transactional Workflows */}
          <div className="rounded-3xl bg-card border border-border/90 p-7 lg:p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xs group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                  TRAI / DLT Compliant
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                SMS & Alerts Dispatch
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                Trigger high-priority transactional SMS alerts, instant OTP verification, booking appointment reminders, order dispatches, and missed-call fallback links with sub-second delivery rates.
              </p>

              <ul className="space-y-2 pt-2 text-xs font-medium text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Immediate automated appointment reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Missed-call fallback with WhatsApp link</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Full DLT principal entity registration support</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>SMS Gateway Integration</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Multi-Channel Simulator Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>LIVE INTERACTIVE SIMULATOR</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              Test Omnichannel <StylishUnderline>In Action</StylishUnderline>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Switch between channels below to experience how Sampark engages customers on WhatsApp, on your website, and via transactional SMS.
            </p>

            {/* Channel Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-card border border-border mt-4 shadow-sm">
              <button
                onClick={() => setActiveChannel('whatsapp')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeChannel === 'whatsapp'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Flow</span>
              </button>

              <button
                onClick={() => setActiveChannel('web')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeChannel === 'web'
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>Website Chat Widget</span>
              </button>

              <button
                onClick={() => setActiveChannel('sms')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeChannel === 'sms'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>SMS Dispatch</span>
              </button>
            </div>
          </div>

          {/* Channel Simulator Content */}
          <div className="max-w-3xl mx-auto">
            
            {/* 1. WhatsApp Channel Simulator */}
            {activeChannel === 'whatsapp' && (
              <div className="rounded-3xl bg-card border border-border shadow-2xl overflow-hidden animate-in fade-in duration-200">
                {/* WhatsApp App Bar */}
                <div className="bg-[#008069] dark:bg-[#1F2C34] text-white p-4 flex items-center justify-between border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-800 dark:bg-emerald-700 flex items-center justify-center font-bold text-white shadow-xs border border-emerald-400/40">
                      S
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5 text-white">
                        Sampark AI Business Assistant
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                      </h3>
                      <p className="text-xs text-emerald-100 dark:text-emerald-200">
                        Official WhatsApp Business API • Multilingual AI
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-black/20 dark:bg-white/10 px-3 py-1 rounded-md text-white font-mono font-semibold">
                    Verified
                  </span>
                </div>

                {/* WhatsApp Chat Canvas */}
                <div className="bg-[#EFEAE2] dark:bg-[#0B141A] p-4 sm:p-6 min-h-[340px] max-h-[420px] overflow-y-auto space-y-3.5 border-x border-border/30">
                  <div className="text-center my-1">
                    <span className="text-[11px] bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full text-stone-700 dark:text-stone-300 font-medium">
                      Messages are end-to-end encrypted & AI-assisted
                    </span>
                  </div>

                  {whatsappMessages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm shadow-xs ${
                          m.sender === 'user'
                            ? 'bg-[#D9FDD3] dark:bg-[#005C4B] text-[#111B21] dark:text-[#E9EDEF] rounded-br-none border border-emerald-500/20'
                            : 'bg-[#FFFFFF] dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF] rounded-bl-none border border-black/10 dark:border-white/5'
                        }`}
                      >
                        <p className="leading-relaxed font-normal">{m.text}</p>
                        
                        {m.card && (
                          <div className="mt-3 bg-[#F0F2F5] dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#2A3942] rounded-xl p-3 flex items-center gap-3">
                            <FileText className="w-7 h-7 text-[#008069] dark:text-[#00A884] shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-xs truncate text-[#111B21] dark:text-[#E9EDEF]">{m.card.title}</p>
                              <p className="text-[11px] text-[#667781] dark:text-[#8696A0]">{m.card.size}</p>
                            </div>
                            <button className="text-xs font-bold text-white bg-[#008069] hover:bg-[#006A57] dark:bg-[#00A884] dark:text-[#111B21] dark:hover:bg-[#00C59B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                              View
                            </button>
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

                {/* WhatsApp Input Bar */}
                <form onSubmit={handleSendWhatsApp} className="p-3 bg-[#F0F2F5] dark:bg-[#1F2C34] border-t border-border flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type in Hindi, Gujarati, or English (e.g. Can you share 2BHK floor plans?)..."
                    value={whatsappMsg}
                    onChange={(e) => setWhatsappMsg(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-[#2A3942] border border-black/10 dark:border-transparent text-xs sm:text-sm text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#667781] dark:placeholder:text-[#8696A0] focus:outline-hidden focus:ring-2 focus:ring-[#008069] font-medium"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-full bg-[#008069] dark:bg-[#00A884] text-white dark:text-[#111B21] hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* 2. Website Chat Widget Simulator */}
            {activeChannel === 'web' && (
              <div className="rounded-3xl bg-card border border-border shadow-2xl overflow-hidden animate-in fade-in duration-200">
                {/* Web Chat Top Header */}
                <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-xs">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight">
                        Apex Industrial AI Assistant
                      </h3>
                      <p className="text-[11px] opacity-90">
                        Embedded on www.apexsolutions.in • Live 24/7
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2.5 py-1 rounded-full font-bold">
                    Web Widget
                  </span>
                </div>

                {/* Web Chat Messages */}
                <div className="bg-background-subtle/50 p-4 sm:p-6 min-h-[340px] max-h-[420px] overflow-y-auto space-y-3.5">
                  {webChatMessages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm shadow-xs ${
                          m.sender === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-card text-foreground rounded-bl-none border border-border'
                        }`}
                      >
                        <p className="leading-relaxed font-medium">{m.text}</p>
                        <span className={`text-[10px] block text-right mt-1 ${m.sender === 'user' ? 'opacity-80' : 'text-muted-foreground'}`}>
                          {m.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Web Chat Input */}
                <form onSubmit={handleSendWebChat} className="p-3 bg-card border-t border-border flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask about machinery specs, pricing, or request a technician callback..."
                    value={webChatMsg}
                    onChange={(e) => setWebChatMsg(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-xs sm:text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary font-medium"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* 3. SMS Transactional Simulator */}
            {activeChannel === 'sms' && (
              <div className="rounded-3xl bg-card border border-border shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <span>Instant SMS & Transactional Dispatch</span>
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Sub-second automated SMS dispatch connected with Indian telecom operators (DLT registered).
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 p-1 bg-background border border-border rounded-xl">
                    <button
                      onClick={() => setSmsScenario('booking')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        smsScenario === 'booking' ? 'bg-blue-600 text-white' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Booking Alert
                    </button>
                    <button
                      onClick={() => setSmsScenario('otp')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        smsScenario === 'otp' ? 'bg-blue-600 text-white' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Instant OTP
                    </button>
                    <button
                      onClick={() => setSmsScenario('dispatch')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        smsScenario === 'dispatch' ? 'bg-blue-600 text-white' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Order Dispatch
                    </button>
                  </div>
                </div>

                {/* SMS Phone Frame Mockup */}
                <div className="max-w-md mx-auto bg-background rounded-2xl border border-border p-4 sm:p-6 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-2">
                    <span className="font-mono font-bold text-foreground">Sender: AX-SMPARK</span>
                    <span>Just now</span>
                  </div>

                  {smsScenario === 'booking' && (
                    <div className="bg-card border border-blue-500/30 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-2">
                      <p className="font-semibold text-blue-600 dark:text-blue-400 font-mono">
                        [SAMPARK CONFIRMATION]
                      </p>
                      <p className="leading-relaxed">
                        Namaste Ramesh Patel! Your site visit for <strong>Vrundavan Heights (3BHK Flat #402)</strong> is confirmed for <strong>Saturday, 11:30 AM</strong>.
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Location pin & agent contact: <span className="text-primary underline">sampark.in/v/8921</span>.
                      </p>
                    </div>
                  )}

                  {smsScenario === 'otp' && (
                    <div className="bg-card border border-blue-500/30 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-2">
                      <p className="font-semibold text-blue-600 dark:text-blue-400 font-mono">
                        [VERIFICATION CODE]
                      </p>
                      <p className="leading-relaxed">
                        Your Sampark verification code is <strong>792-410</strong>. Valid for 5 minutes. Please do not share this OTP with anyone.
                      </p>
                    </div>
                  )}

                  {smsScenario === 'dispatch' && (
                    <div className="bg-card border border-blue-500/30 rounded-xl p-4 text-xs sm:text-sm text-foreground space-y-2">
                      <p className="font-semibold text-blue-600 dark:text-blue-400 font-mono">
                        [DISPATCH NOTICE]
                      </p>
                      <p className="leading-relaxed">
                        Order #IND-5942 has been dispatched via BlueDart (AWB: 88401923). Estimated delivery: Tomorrow by 2:00 PM.
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Track live or reschedule on WhatsApp: <span className="text-emerald-600 underline">wa.me/917940088900</span>.
                      </p>
                    </div>
                  )}

                  <div className="text-[11px] text-muted-foreground text-center font-medium">
                    ✓ 99.4% Delivery Success Rate • TRAI DLT Compliant Headers
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* Pre-Built Website Integrations: 1-Minute Code Snippets */}
      <section id="prebuilt-integrations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>INTEGRATE ACROSS PRE-BUILT WEBSITES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            Works with any CMS or Custom Website in 60 Seconds
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            No need to redesign your site or hire external developers. Simply copy our lightweight script tag or install our pre-built plugins to instantly activate WhatsApp, SMS, and live website chat on your existing domain.
          </p>
        </div>

        {/* Code Snippet Box */}
        <div className="rounded-3xl bg-card border border-border shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-muted/40 border-b border-border">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCodeTab('wordpress')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCodeTab === 'wordpress'
                    ? 'bg-card text-primary border border-border shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                WordPress & WooCommerce
              </button>

              <button
                onClick={() => setActiveCodeTab('shopify')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCodeTab === 'shopify'
                    ? 'bg-card text-primary border border-border shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Shopify Stores
              </button>

              <button
                onClick={() => setActiveCodeTab('react')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCodeTab === 'react'
                    ? 'bg-card text-primary border border-border shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Next.js / React
              </button>

              <button
                onClick={() => setActiveCodeTab('webflow')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCodeTab === 'webflow'
                    ? 'bg-card text-primary border border-border shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Webflow, Wix & HTML
              </button>
            </div>

            <button
              onClick={() => copyToClipboard(codeSnippets[activeCodeTab].code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-bold text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>Target: {codeSnippets[activeCodeTab].filename}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">● Production Ready</span>
            </div>

            <pre className="p-4 sm:p-5 rounded-2xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800 leading-relaxed shadow-inner">
              <code>{codeSnippets[activeCodeTab].code}</code>
            </pre>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
              💡 <strong>Integration Note:</strong> {codeSnippets[activeCodeTab].note}
            </div>
          </div>
        </div>

      </section>

      {/* Enterprise Capabilities & Integrations Infinite Motion Marquee */}
      <section className="bg-background py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>ECOSYSTEM COMPATIBILITY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              Deep Ecosystem <StylishUnderline>Integrations</StylishUnderline>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Sampark chatbots sync effortlessly with your existing Indian CRM systems, accounting packages, and payment gateways.
            </p>
          </div>
        </div>

        {/* Thick Horizontal Infinite Moving Label Ticker (Hardware-Accelerated 60fps) */}
        <div className="mt-10 relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-smooth flex gap-6">
            {[
              { name: 'WhatsApp Cloud API', cat: 'Meta Official', desc: 'Verified Green Tick & Bulk Broadcasts', icon: MessageSquare, tagColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'WordPress & WooCommerce', cat: 'CMS / E-Commerce', desc: '1-Click Plugin & Live Product Sync', icon: Globe, tagColor: 'text-blue-600 bg-blue-500/10 border-blue-500/20' },
              { name: 'Zoho CRM & Bigin', cat: 'Indian CRM Leader', desc: 'Auto Lead Capture & Deal Pipeline Routing', icon: Database, tagColor: 'text-amber-600 bg-amber-500/10 border-amber-500/20' },
              { name: 'Razorpay & UPI Collect', cat: 'Payment Gateways', desc: 'In-Chat Instant Payment Link Collection', icon: CreditCard, tagColor: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20' },
              { name: 'Shopify Store', cat: 'E-Commerce Platform', desc: 'Abandoned Cart Recovery & Order Tracking', icon: Zap, tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'Tally Prime & Busy ERP', cat: 'Indian Accounting', desc: 'Ledger Inquiries & Automated Invoice Dispatch', icon: Building2, tagColor: 'text-orange-600 bg-orange-500/10 border-orange-500/20' },
              { name: 'Salesforce & HubSpot', cat: 'Enterprise CRM', desc: 'Bidirectional Customer Logs & Analytics', icon: Layers, tagColor: 'text-sky-600 bg-sky-500/10 border-sky-500/20' },
              { name: 'Google Sheets & Drive', cat: 'Workspace Cloud', desc: 'Instant Row Append & Cloud Document Delivery', icon: FileText, tagColor: 'text-green-600 bg-green-500/10 border-green-500/20' },
              { name: 'LeadSquared', cat: 'Sales Execution', desc: 'High-Volume Lead Sync & Telephony Routing', icon: Smartphone, tagColor: 'text-purple-600 bg-purple-500/10 border-purple-500/20' },
              // Duplicate set to create seamless infinite loop
              { name: 'WhatsApp Cloud API', cat: 'Meta Official', desc: 'Verified Green Tick & Bulk Broadcasts', icon: MessageSquare, tagColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'WordPress & WooCommerce', cat: 'CMS / E-Commerce', desc: '1-Click Plugin & Live Product Sync', icon: Globe, tagColor: 'text-blue-600 bg-blue-500/10 border-blue-500/20' },
              { name: 'Zoho CRM & Bigin', cat: 'Indian CRM Leader', desc: 'Auto Lead Capture & Deal Pipeline Routing', icon: Database, tagColor: 'text-amber-600 bg-amber-500/10 border-amber-500/20' },
              { name: 'Razorpay & UPI Collect', cat: 'Payment Gateways', desc: 'In-Chat Instant Payment Link Collection', icon: CreditCard, tagColor: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20' },
              { name: 'Shopify Store', cat: 'E-Commerce Platform', desc: 'Abandoned Cart Recovery & Order Tracking', icon: Zap, tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'Tally Prime & Busy ERP', cat: 'Indian Accounting', desc: 'Ledger Inquiries & Automated Invoice Dispatch', icon: Building2, tagColor: 'text-orange-600 bg-orange-500/10 border-orange-500/20' },
              { name: 'Salesforce & HubSpot', cat: 'Enterprise CRM', desc: 'Bidirectional Customer Logs & Analytics', icon: Layers, tagColor: 'text-sky-600 bg-sky-500/10 border-sky-500/20' },
              { name: 'Google Sheets & Drive', cat: 'Workspace Cloud', desc: 'Instant Row Append & Cloud Document Delivery', icon: FileText, tagColor: 'text-green-600 bg-green-500/10 border-green-500/20' },
              { name: 'LeadSquared', cat: 'Sales Execution', desc: 'High-Volume Lead Sync & Telephony Routing', icon: Smartphone, tagColor: 'text-purple-600 bg-purple-500/10 border-purple-500/20' }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-card border border-border/90 shadow-md min-w-[320px] sm:min-w-[360px] shrink-0 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                        {item.cat}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-foreground truncate group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

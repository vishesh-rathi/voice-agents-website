import React, { useState } from 'react';
import { StylishUnderline } from './StylishUnderline';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How does the AI voice agent connect to my existing phone number?',
    a: "We forward your existing landline or mobile to an AI agent number that our system answers. Nothing changes for your customers — they call the number they always have. When the AI can't handle a request, it transfers the call to you or your team."
  },
  {
    q: 'Which Indian languages does the AI speak today?',
    a: "Today the agent handles Hindi, Gujarati, Marathi, Bengali, and English natively — including mixed-language conversations like Hinglish or Gunglish. Tamil, Telugu, Kannada, Punjabi, and Malayalam are on the roadmap."
  },
  {
    q: "What happens when the AI can't answer something?",
    a: "Every conversation has a built-in human handoff. If the AI detects frustration or an out-of-scope request, it transfers the call to your team based on rules you configure during onboarding."
  },
  {
    q: 'How much does it cost?',
    a: "Pricing depends on your monthly call and message volume. Book a 15-minute discovery call and we'll size a plan to your business."
  },
  {
    q: 'How long does setup take?',
    a: 'Most SMBs are live in 7–14 business days: 2 days of discovery to understand your FAQs and workflows, 3–5 days to train the agent on your specific scripts, and 2 days of live-tuning after launch.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq-section" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Questions from <StylishUnderline>SMB Owners</StylishUnderline>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                id={`faq-item-${i}`}
                className={`rounded-2xl bg-card border overflow-hidden transition-colors ${
                  isOpen ? 'border-primary/40' : 'border-border hover:border-primary/30'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-5 sm:px-6 pb-6 -mt-1">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

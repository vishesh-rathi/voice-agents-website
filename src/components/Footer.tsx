import React from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { NavigationTab } from '../types';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ArrowRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentTab, openDemoModalWithService } = useWordPressContent();

  const handleNav = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-background border-t border-border pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-lg">
                S
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-foreground">
                SAMPARK SOLUTIONS
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Practical, results-focused AI partner helping Indian businesses modernize customer operations with native-language voice agents and intelligent workflows.
            </p>

            <div className="pt-2">
              <button
                id="footer-book-demo-btn"
                onClick={() => openDemoModalWithService('Native Voice Agents')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-5 py-2.5 rounded-full text-xs font-bold shadow-xs transition-all active:scale-98 group cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNav('voice-agents')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Voice Agents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('chatbots')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Omnichannel Chatbots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('consulting')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  AI Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industries')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNav('voice-agents')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Native Voice Agents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('chatbots')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  WhatsApp & SMS AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('consulting')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Workflow Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industries')} 
                  className="hover:text-primary transition-colors text-left block w-full cursor-pointer"
                >
                  Sector Architectures
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:contact@samparksolutions.in" className="hover:text-primary transition-colors">
                  contact@samparksolutions.in
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>+91 79 4008 8900</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sampark Solutions. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#/" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#/" className="hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#/" className="hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { useWordPressContent } from '../providers/WordPressContentProvider';
import { NavigationTab } from '../types';
import { 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  Workflow, 
  Building2, 
  Info, 
  Mail, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentTab, setCurrentTab, openDemoModalWithService, isDarkMode, toggleDarkMode } = useWordPressContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'voice-agents', label: 'Voice Agents', icon: <PhoneCall className="w-4 h-4" /> },
    { id: 'chatbots', label: 'Chatbots', icon: <Bot className="w-4 h-4" /> },
    { id: 'consulting', label: 'Consulting', icon: <Workflow className="w-4 h-4" /> },
    { id: 'industries', label: 'Industries', icon: <Building2 className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-border ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-xs py-3.5' 
          : 'bg-background/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          id="brand-logo-btn"
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-2 text-left group focus:outline-hidden"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-lg shadow-xs group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-foreground flex items-center gap-1.5">
              SAMPARK SOLUTIONS
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-card/80 dark:bg-card/40 border border-border/80 rounded-full px-4 py-1.5 shadow-xs">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => setCurrentTab(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-secondary text-secondary-foreground font-semibold shadow-xs' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors border border-border/60"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>

          {/* Book Demo Button */}
          <button
            id="header-book-demo-btn"
            onClick={() => openDemoModalWithService('Native Voice Agents')}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-5 py-2.5 rounded-full text-sm font-bold tracking-tight shadow-xs hover:shadow-md transition-all active:scale-98 group cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-background border-b border-border px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => { setCurrentTab('home'); setIsMobileMenuOpen(false); }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-left text-sm font-medium ${
                currentTab === 'home' ? 'bg-secondary text-secondary-foreground font-semibold' : 'text-muted-foreground hover:bg-muted/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Home Overview</span>
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentTab(item.id); setIsMobileMenuOpen(false); }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-left text-sm font-medium ${
                  currentTab === item.id ? 'bg-secondary text-secondary-foreground font-semibold' : 'text-muted-foreground hover:bg-muted/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-border mt-3">
            <button
              onClick={() => { openDemoModalWithService('Native Voice Agents'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-bold shadow-xs"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

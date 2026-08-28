/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WordPressContentProvider, useWordPressContent } from './providers/WordPressContentProvider';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueGridSection } from './components/ValueGridSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FrameworkSection } from './components/FrameworkSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { VoiceSimulatorModal } from './components/VoiceSimulatorModal';
import { LiveChatbotWidget } from './components/LiveChatbotWidget';

import { PredefinedVoiceAgentsSection } from './components/PredefinedVoiceAgentsSection';

// Dedicated Tab Views
import { VoiceAgentsView } from './components/views/VoiceAgentsView';
import { ChatbotsView } from './components/views/ChatbotsView';
import { ConsultingView } from './components/views/ConsultingView';
import { IndustriesView } from './components/views/IndustriesView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';

const MainLayout: React.FC = () => {
  const { currentTab } = useWordPressContent();

  const renderContent = () => {
    switch (currentTab) {
      case 'voice-agents':
        return <VoiceAgentsView />;
      case 'whatsapp-ai':
      case 'chatbots':
        return <ChatbotsView />;
      case 'consulting':
        return <ConsultingView />;
      case 'industries':
        return <IndustriesView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'home':
      default:
        return (
          <main className="space-y-0">
            <HeroSection />
            <PredefinedVoiceAgentsSection />
            <ValueGridSection />
            <CapabilitiesSection />
            <FrameworkSection />
            <IndustriesSection />
            <ResultsSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200 antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <div className="flex-1">
        {renderContent()}
      </div>
      <Footer />
      <DemoModal />
      <VoiceSimulatorModal />
      <LiveChatbotWidget />
    </div>
  );
};

export default function App() {
  return (
    <WordPressContentProvider>
      <MainLayout />
    </WordPressContentProvider>
  );
}

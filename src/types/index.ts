export type NavigationTab = 
  | 'home' 
  | 'voice-agents' 
  | 'whatsapp-ai' 
  | 'chatbots' 
  | 'consulting' 
  | 'industries' 
  | 'about' 
  | 'contact';

export interface WordPressSiteSettings {
  siteTitle: string;
  tagline: string;
  heroPill: string;
  contactEmail: string;
  contactPhone: string;
  location: string;
  businessHours: string;
  metrics: {
    missedCallsReduction: string;
    firstResponseSpeed: string;
    leadFollowupRate: string;
    weeklyHoursSaved: string;
    clientSatisfaction: string;
    languagesSupported: string;
    deploymentTurnaround: string;
  };
}

export interface VoiceLanguageItem {
  id: string;
  code: string;
  name: string;
  scriptChar: string;
  region: string;
  sampleAudioText: string;
  translation: string;
  accentStyle: string;
  speechRate: number;
  sampleVoicePrompt: string;
  badgeText: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  metric: string;
  badge: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  sampleWorkflow: {
    caller: string;
    aiResponse: string;
    outcome: string;
  };
}

export interface DeploymentStep {
  stepNumber: string;
  category: string;
  title: string;
  description: string;
  tag: string;
}

export interface CapabilityCard {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  route: NavigationTab;
}

export interface ConsultingStep {
  id: string;
  title: string;
  step: string;
  description: string;
  keyOutcome: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  highlightMetric: string;
  metricLabel: string;
}

export interface DemoBookingFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  serviceInterest: string;
  message?: string;
}

export interface VoiceAgentDialogueTurn {
  speaker: 'caller' | 'agent';
  text: string;
  translation: string;
  language: string;
  latencyMs: number;
  actionExtracted?: {
    label: string;
    value: string;
  };
}

export interface VoiceAgentScenario {
  id: string;
  scenarioName: string;
  language: string;
  turns: VoiceAgentDialogueTurn[];
  finalOutcome: {
    actionBadge: string;
    summary: string;
    webhookFired: string;
  };
}

export interface PredefinedVoiceAgent {
  id: 'real-estate' | 'barber' | 'hotel-receptionist';
  name: string;
  badge: string;
  role: string;
  tagline: string;
  icon: string;
  metrics: {
    resolutionRate: string;
    avgHandlingTime: string;
    escalationRate: string;
    bookingSuccess: string;
  };
  supportedLanguages: string[];
  scenarios: VoiceAgentScenario[];
}

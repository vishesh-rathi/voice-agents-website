import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  NavigationTab, 
  WordPressSiteSettings, 
  VoiceLanguageItem, 
  IndustrySolution, 
  DeploymentStep, 
  CapabilityCard,
  ConsultingStep,
  Testimonial,
  DemoBookingFormData,
  PredefinedVoiceAgent 
} from '../types';

interface WordPressContextType {
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  siteSettings: WordPressSiteSettings;
  voiceLanguages: VoiceLanguageItem[];
  industrySolutions: IndustrySolution[];
  deploymentSteps: DeploymentStep[];
  capabilities: CapabilityCard[];
  consultingSteps: ConsultingStep[];
  testimonials: Testimonial[];
  predefinedVoiceAgents: PredefinedVoiceAgent[];
  activePredefinedAgentId: 'real-estate' | 'barber' | 'hotel-receptionist';
  setActivePredefinedAgentId: (id: 'real-estate' | 'barber' | 'hotel-receptionist') => void;
  isDemoModalOpen: boolean;
  setIsDemoModalOpen: (open: boolean) => void;
  demoPrefillService: string;
  openDemoModalWithService: (service: string) => void;
  isVoiceSimulatorOpen: boolean;
  setIsVoiceSimulatorOpen: (open: boolean) => void;
  activeLanguageForDemo: VoiceLanguageItem | null;
  setActiveLanguageForDemo: (lang: VoiceLanguageItem | null) => void;
  submitContactForm: (data: DemoBookingFormData) => Promise<{ success: boolean; message: string }>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const WordPressContext = createContext<WordPressContextType | undefined>(undefined);

export const WordPressContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTabState] = useState<NavigationTab>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [demoPrefillService, setDemoPrefillService] = useState<string>('Native Voice Agents');
  const [isVoiceSimulatorOpen, setIsVoiceSimulatorOpen] = useState<boolean>(false);
  const [activePredefinedAgentId, setActivePredefinedAgentId] = useState<'real-estate' | 'barber' | 'hotel-receptionist'>('real-estate');
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sampark_theme');
      if (saved) return saved === 'dark';
      return false; // Default to Light Mode
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('sampark_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('sampark_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'whatsapp-ai') {
        setCurrentTabState('chatbots');
        window.location.hash = '/chatbots';
        return;
      }
      const validTabs: NavigationTab[] = [
        'home', 'voice-agents', 'chatbots', 'consulting', 'industries', 'about', 'contact'
      ];
      if (validTabs.includes(hash as NavigationTab)) {
        setCurrentTabState(hash as NavigationTab);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setCurrentTab = (tab: NavigationTab) => {
    setCurrentTabState(tab);
    window.location.hash = `/${tab === 'home' ? '' : tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDemoModalWithService = (service: string) => {
    setDemoPrefillService(service);
    setIsDemoModalOpen(true);
  };

  // Site Settings
  const siteSettings: WordPressSiteSettings = {
    siteTitle: 'SAMPARK SOLUTIONS',
    tagline: "Modernize your customer conversations with native-language AI voice agents across all major Indian languages.",
    heroPill: "Pan-India AI Automation • Built for Indian Enterprises & SMEs",
    contactEmail: 'contact@samparksolutions.in',
    contactPhone: '+91 79 4008 8900',
    location: 'Ahmedabad, Gujarat & Mumbai, Maharashtra',
    businessHours: 'Monday to Saturday: 9:00 AM - 6:30 PM IST',
    metrics: {
      missedCallsReduction: '68%',
      firstResponseSpeed: '< 15s',
      leadFollowupRate: '3.4x',
      weeklyHoursSaved: '25+ hrs',
      clientSatisfaction: '4.9/5.0',
      languagesSupported: '10+',
      deploymentTurnaround: '7 Days'
    }
  };

  // 3 Predefined Voice Agents
  const predefinedVoiceAgents: PredefinedVoiceAgent[] = [
    {
      id: 'real-estate',
      name: 'Real Estate Inquiry & Visit Booking Agent',
      badge: 'High-Ticket Lead Qualification',
      role: 'Inbound Property Specialist',
      tagline: 'Captures caller budget, BHK specifications, and locks verified weekend site visits on calendar.',
      icon: 'Building',
      metrics: {
        resolutionRate: '96.2%',
        avgHandlingTime: '1m 45s',
        escalationRate: '3.8%',
        bookingSuccess: '41.5%'
      },
      supportedLanguages: ['Hindi', 'Gujarati', 'Marathi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Punjabi', 'Malayalam', 'English'],
      scenarios: [
        {
          id: 're-1',
          scenarioName: '3 BHK Pricing & Sunday Visit Booking',
          language: 'Hindi / Hinglish',
          turns: [
            {
              speaker: 'caller',
              text: 'Hello, mujhe Palm Heights project mein 3 BHK ka price aur floor plan janna tha.',
              translation: '"Hello, I wanted to know the price and floor plan for a 3 BHK in Palm Heights."',
              language: 'Hindi',
              latencyMs: 380,
              actionExtracted: { label: 'Inquiry Target', value: 'Palm Heights 3 BHK' }
            },
            {
              speaker: 'agent',
              text: 'Namaste! Palm Heights mein 3 BHK premium apartments ₹1.15 Cr se start hote hain, with spacious balconies and club facing views. Kya main aapko complete brochure aur unit layouts WhatsApp par bhej doon?',
              translation: '"Namaste! 3 BHKs start from ₹1.15 Cr with club views. Shall I send the full brochure and layouts on WhatsApp?"',
              language: 'Hindi',
              latencyMs: 340,
              actionExtracted: { label: 'WhatsApp Dispatch', value: 'Brochure PDF + Floorplans' }
            },
            {
              speaker: 'caller',
              text: 'Haan bhej dijiye, aur Sunday ko site visit schedule kar sakte hain?',
              translation: '"Yes please send it, and can we schedule a site visit for Sunday?"',
              language: 'Hindi',
              latencyMs: 410,
              actionExtracted: { label: 'Intent', value: 'Site Visit Scheduling' }
            },
            {
              speaker: 'agent',
              text: 'Bilkul! Sunday ke liye subah 11:30 AM ya dopahar 3:30 PM ka slot available hai. Kaunsa time aapke liye comfortable rahega?',
              translation: '"Certainly! Sunday 11:30 AM or 3:30 PM is available. Which time is more convenient for you?"',
              language: 'Hindi',
              latencyMs: 310,
              actionExtracted: { label: 'Available Slots', value: 'Sun 11:30 AM | 3:30 PM' }
            },
            {
              speaker: 'caller',
              text: '11:30 AM book kar dijiye.',
              translation: '"Please book 11:30 AM."',
              language: 'Hindi',
              latencyMs: 320,
              actionExtracted: { label: 'Confirmed Slot', value: 'Sunday @ 11:30 AM' }
            },
            {
              speaker: 'agent',
              text: 'Aapki Sunday 11:30 AM ki site visit confirm ho gayi hai! Location pin aur Sales Manager ka contact WhatsApp par bhej diya gaya hai. Dhanyawad!',
              translation: '"Your Sunday 11:30 AM site visit is confirmed! GPS pin and Sales Manager details dispatched via WhatsApp. Thank you!"',
              language: 'Hindi',
              latencyMs: 290,
              actionExtracted: { label: 'CRM Sync', value: 'Lead Pushed to CRM + WhatsApp Pin' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Visit Scheduled & CRM Synced',
            summary: 'High-intent lead qualified (₹1.15 Cr Budget), site inspection locked for Sunday 11:30 AM, WhatsApp brochure & GPS pin auto-dispatched.',
            webhookFired: 'POST /crm/v1/leads → Status: 200 OK (Salesforce & WhatsApp API)'
          }
        },
        {
          id: 're-2',
          scenarioName: 'Gujarati Site Visit & Loan Eligibility Query',
          language: 'Gujarati',
          turns: [
            {
              speaker: 'caller',
              text: 'નમસ્તે, તમારા SG હાઈવે પ્રોજેક્ટમાં બેંક લોન ફેસિલિટી અને પઝેશન ડેટ શું છે?',
              translation: '"Namaste, what are the bank loan facilities and possession date for your SG Highway project?"',
              language: 'Gujarati',
              latencyMs: 360,
              actionExtracted: { label: 'Inquiry', value: 'Bank Loan & Possession' }
            },
            {
              speaker: 'agent',
              text: 'નમસ્તે સર! અમારો પ્રોજેક્ટ HDFC, SBI અને ICICI બેંકથી પ્રી-એપ્રૂવ્ડ છે. પઝેશન ડિસેમ્બર 2026 સુધીમાં મળી જશે. શું તમે સેમ્પલ ફ્લેટ જોવા શનિવારે આવી શકો છો?',
              translation: '"Namaste sir! Pre-approved by HDFC, SBI & ICICI. Possession by Dec 2026. Can you visit to view the sample flat this Saturday?"',
              language: 'Gujarati',
              latencyMs: 320,
              actionExtracted: { label: 'Value Pitch', value: 'Pre-Approved Banks + Sample Flat' }
            },
            {
              speaker: 'caller',
              text: 'હા, શનિવારે સાંજે 4 વાગ્યે રાખો.',
              translation: '"Yes, set it for Saturday 4 PM."',
              language: 'Gujarati',
              latencyMs: 390,
              actionExtracted: { label: 'Preferred Slot', value: 'Saturday @ 4:00 PM' }
            },
            {
              speaker: 'agent',
              text: 'તમારું શનિવારે 4 વાગ્યાનું વિઝિટ બુક થઈ ગયું છે. અમારો રિલેશનશિપ મેનેજર સ્થળ પર તમારું સ્વાગત કરશે. વિગતો વોટ્સએપ પર મોકલી દીધી છે.',
              translation: '"Your Saturday 4 PM visit is confirmed. Our Relationship Manager will greet you on site. Details sent on WhatsApp."',
              language: 'Gujarati',
              latencyMs: 310,
              actionExtracted: { label: 'Status', value: 'Calendar Locked + WhatsApp Push' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Sample Flat Visit Confirmed',
            summary: 'Gujarati conversation handled naturally with zero latency. Pre-approved bank info shared and Saturday 4 PM slot reserved.',
            webhookFired: 'POST /calendar/events → Event created: "Site Visit - SG Highway (Gujarati Lead)"'
          }
        }
      ]
    },
    {
      id: 'barber',
      name: "Barber's Appointment Booking & Follow-up Agent",
      badge: 'Salon & Grooming Operations',
      role: 'Automated Reception & Reminder Bot',
      tagline: 'Schedules haircut & beard grooming slots, checks stylist availability, and manages automated reschedule follow-ups.',
      icon: 'Scissors',
      metrics: {
        resolutionRate: '98.5%',
        avgHandlingTime: '48s',
        escalationRate: '1.2%',
        bookingSuccess: '89.4%'
      },
      supportedLanguages: ['Hindi', 'Gujarati', 'Marathi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Punjabi', 'Malayalam', 'English'],
      scenarios: [
        {
          id: 'barber-1',
          scenarioName: 'Haircut + Beard Trim Booking with Stylist',
          language: 'Marathi & Hindi',
          turns: [
            {
              speaker: 'caller',
              text: 'मला आज संध्याकाळी हेअरकट आणि दाढी सेट करायची आहे, राहुल मोकळा आहे का?',
              translation: '"I want a haircut and beard trim this evening. Is stylist Rahul free?"',
              language: 'Marathi',
              latencyMs: 340,
              actionExtracted: { label: 'Services', value: 'Haircut + Beard Styling' }
            },
            {
              speaker: 'agent',
              text: 'नमस्कार! हो, राहुल दादा संध्याकाळी 5:30 आणि 6:45 ला उपलब्ध आहेत. तुम्हाला कुठली वेळ सोयीची पडेल?',
              translation: '"Namaskar! Yes, Rahul is available at 5:30 PM and 6:45 PM. Which time suits you?"',
              language: 'Marathi',
              latencyMs: 290,
              actionExtracted: { label: 'Stylist Slots', value: 'Rahul: 5:30 PM / 6:45 PM' }
            },
            {
              speaker: 'caller',
              text: '6:45 ची वेळ बुक करा, माझं नाव अमित आहे.',
              translation: '"Book 6:45 PM, my name is Amit."',
              language: 'Marathi',
              latencyMs: 310,
              actionExtracted: { label: 'Customer Name', value: 'Amit (6:45 PM)' }
            },
            {
              speaker: 'agent',
              text: 'अमित जी, तुमची आज संध्याकाळी 6:45 ची राहुल दादांसोबतची अपॉइंटमेंट कन्फर्म झाली आहे! आम्ही तुम्हाला व्हॉट्सॲपवर टोकन पाठवले आहे.',
              translation: '"Amit ji, your appointment with Rahul today at 6:45 PM is confirmed! We have dispatched your digital token on WhatsApp."',
              language: 'Marathi',
              latencyMs: 280,
              actionExtracted: { label: 'SMS / Token', value: 'Digital Token #B-42 Sent' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Salon Slot Confirmed in 48s',
            summary: 'Stylist Rahul assigned for 6:45 PM slot. Total bill preview and salon directions pushed to caller WhatsApp.',
            webhookFired: 'POST /salon/slots/reserve → Token #B-42 (Sync with Salon POS)'
          }
        },
        {
          id: 'barber-2',
          scenarioName: 'Follow-up & Rescheduling Flow',
          language: 'Hindi',
          turns: [
            {
              speaker: 'caller',
              text: 'Bhaiya meri 4 baje ki booking thi, main thoda late ho raha hoon, 5:30 ho sakta hai?',
              translation: '"Brother, I had a 4 PM booking, I am running late. Can we move it to 5:30 PM?"',
              language: 'Hindi',
              latencyMs: 310,
              actionExtracted: { label: 'Request', value: 'Reschedule: 4:00 PM → 5:30 PM' }
            },
            {
              speaker: 'agent',
              text: 'Haan ji bilkul! Aapka slot humne sham 5:30 PM par move kar diya hai. Koi extra charge nahi hai. Salon par milte hain!',
              translation: '"Certainly! Your slot is moved to 5:30 PM at no extra charge. See you at the salon!"',
              language: 'Hindi',
              latencyMs: 270,
              actionExtracted: { label: 'Reschedule Status', value: 'Slot Updated to 5:30 PM' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Zero-Friction Reschedule',
            summary: 'Booking time slot adjusted seamlessly in salon queue without front-desk manual intervention.',
            webhookFired: 'PATCH /salon/bookings/BK-8891 → Time Updated'
          }
        }
      ]
    },
    {
      id: 'hotel-receptionist',
      name: 'AI Hotel Receptionist',
      badge: '24/7 Hospitality Desk',
      role: 'Automated Guest Concierge & Reservations',
      tagline: 'Handles room tariff queries, check-in policies, dining inquiries, and books stays across Indian languages.',
      icon: 'Hotel',
      metrics: {
        resolutionRate: '97.8%',
        avgHandlingTime: '1m 15s',
        escalationRate: '2.1%',
        bookingSuccess: '74.2%'
      },
      supportedLanguages: ['Hindi', 'Gujarati', 'Marathi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Punjabi', 'Malayalam', 'English'],
      scenarios: [
        {
          id: 'hotel-1',
          scenarioName: 'Deluxe Room Booking & Early Check-in',
          language: 'Bengali & English',
          turns: [
            {
              speaker: 'caller',
              text: 'নমস্কার, আগামী শুক্রবারের জন্য একটা ডিলাক্স রুম খালি আছে কি? আর আর্লি চেক-ইন পাব?',
              translation: '"Namaskar, is a Deluxe room available for next Friday? And can we get early check-in?"',
              language: 'Bengali',
              latencyMs: 370,
              actionExtracted: { label: 'Inquiry', value: 'Deluxe Room for Friday' }
            },
            {
              speaker: 'agent',
              text: 'নমস্কার! হ্যাঁ, আগামী শুক্রবার আমাদের প্রিমিয়াম ডিলাক্স রুম উপলব্ধ আছে ₹3,800 + GST-তে, যার মধ্যে কমপ্লিমেন্টারি ব্রেকফাস্ট অন্তর্ভুক্ত। আর সকাল 9টায় ফ্রি আর্লি চেক-ইন সুবিধা দেওয়া হবে।',
              translation: '"Namaskar! Yes, Premium Deluxe room is available at ₹3,800 + GST with complimentary breakfast. Early check-in from 9 AM will be provided."',
              language: 'Bengali',
              latencyMs: 330,
              actionExtracted: { label: 'Tariff & Perks', value: '₹3,800 + Breakfast + Early Check-in' }
            },
            {
              speaker: 'caller',
              text: 'দারুণ! 2 জনের জন্য রুমটা বুক করে দিন।',
              translation: '"Great! Please book the room for 2 guests."',
              language: 'Bengali',
              latencyMs: 350,
              actionExtracted: { label: 'Guests', value: '2 Adults' }
            },
            {
              speaker: 'agent',
              text: 'আপনার বুকিং রেফারেন্স #HT-7721 তৈরি করা হয়েছে। পেমেন্ট লিংক এবং হোটেল ডিরেকশন হোয়াটসঅ্যাপে পাঠিয়ে দেওয়া হলো। আপনার যাত্রা শুভ হোক!',
              translation: '"Your booking reference #HT-7721 is generated. Payment link and hotel directions sent to your WhatsApp. Have a pleasant journey!"',
              language: 'Bengali',
              latencyMs: 300,
              actionExtracted: { label: 'PMS Booking', value: 'Reservation #HT-7721 Created' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Guest Reservation Confirmed',
            summary: 'Deluxe Room reserved with 9 AM complimentary early check-in. Instant PMS reservation ID generated and WhatsApp payment link dispatched.',
            webhookFired: 'POST /pms/reservations → ID: #HT-7721 (Hotel PMS Synced)'
          }
        },
        {
          id: 'hotel-2',
          scenarioName: 'Tamil Room Amenities & Airport Cab Inquiry',
          language: 'Tamil',
          turns: [
            {
              speaker: 'caller',
              text: 'வணக்கம், உங்கள் ஹோட்டலில் விமான நிலைய பிக்-அப் வசதி மற்றும் உணவக நேரம் என்ன?',
              translation: '"Vanakkam, what are your airport pick-up services and restaurant timings?"',
              language: 'Tamil',
              latencyMs: 380,
              actionExtracted: { label: 'Inquiry', value: 'Airport Cab & Dining Hours' }
            },
            {
              speaker: 'agent',
              text: 'வணக்கம் சார்! எங்கள் உணவகம் இரவு 11 மணி வரை செயல்படும். விமான நிலைய பிக்-அப் கேப் முன்பதிவு செய்ய நாங்கள் உங்களுக்கு வாட்ஸ்அப்பில் விவரங்களை அனுப்புகிறோம்.',
              translation: '"Vanakkam sir! Restaurant is open till 11 PM. We will dispatch the airport cab booking details directly to your WhatsApp."',
              language: 'Tamil',
              latencyMs: 320,
              actionExtracted: { label: 'Concierge Action', value: 'Airport Taxi Details Dispatched' }
            }
          ],
          finalOutcome: {
            actionBadge: 'Concierge Assistance Handled',
            summary: 'Instant response in Tamil explaining dining timings and automated airport cab dispatch assistance.',
            webhookFired: 'POST /concierge/requests → Cab Dispatch Initiated'
          }
        }
      ]
    }
  ];

  // 9 Indian Voice Languages
  const voiceLanguages: VoiceLanguageItem[] = [
    {
      id: 'hindi',
      code: 'hi-IN',
      name: 'Hindi',
      scriptChar: 'अ',
      region: 'NORTH & CENTRAL INDIA',
      sampleAudioText: 'नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?',
      translation: '"Namaste! How can I assist you today?"',
      accentStyle: 'Polite Conversational Standard',
      speechRate: 1.0,
      sampleVoicePrompt: 'Aapka appointment kal dopahar 2 baje confirm ho chuka hai.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'gujarati',
      code: 'gu-IN',
      name: 'Gujarati',
      scriptChar: 'ક',
      region: 'GUJARAT & WESTERN INDIA',
      sampleAudioText: 'નમસ્તે! આજે હું તમારી શું મદદ કરી શકું?',
      translation: '"Namaste! How may I assist you today?"',
      accentStyle: 'Amdavadi / Surati Business Cadence',
      speechRate: 1.0,
      sampleVoicePrompt: 'તમારો ઓર્ડર અમે કન્ફર્મ કર્યો છે, કાલે ડિલિવર થઈ જશે.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'marathi',
      code: 'mr-IN',
      name: 'Marathi',
      scriptChar: 'म',
      region: 'MAHARASHTRA',
      sampleAudioText: 'नमस्कार! मी तुम्हाला कशी मदत करू शकतो?',
      translation: '"Namaskar! How can I help you?"',
      accentStyle: 'Puneri & Mumbai Natural Cadence',
      speechRate: 1.0,
      sampleVoicePrompt: 'तुमचे बुकिंग कन्फर्म झाले आहे. आम्ही तुम्हाला मेसेज पाठवला आहे.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'bengali',
      code: 'bn-IN',
      name: 'Bengali',
      scriptChar: 'বা',
      region: 'WEST BENGAL & EASTERN INDIA',
      sampleAudioText: 'নমস্কার! আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
      translation: '"Namaskar! How may I help you?"',
      accentStyle: 'Standard Kolkata Polite',
      speechRate: 1.0,
      sampleVoicePrompt: 'আপনার অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে।',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'tamil',
      code: 'ta-IN',
      name: 'Tamil',
      scriptChar: 'த',
      region: 'TAMIL NADU & SOUTH INDIA',
      sampleAudioText: 'வணக்கம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
      translation: '"Vanakkam! How can I help you today?"',
      accentStyle: 'Chennai & Madurai Commercial Flow',
      speechRate: 1.0,
      sampleVoicePrompt: 'உங்கள் ஆர்டர் உறுதி செய்யப்பட்டது, விரைவில் அனுப்பப்படும்.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'telugu',
      code: 'te-IN',
      name: 'Telugu',
      scriptChar: 'తె',
      region: 'ANDHRA PRADESH & TELANGANA',
      sampleAudioText: 'నమస్కారం! నేను మీకు ఎలా సహాయం చేయగలను?',
      translation: '"Namaskaram! How can I help you?"',
      accentStyle: 'Hyderabad & Coastal Commercial',
      speechRate: 1.0,
      sampleVoicePrompt: 'మీ అపాయింట్‌మెంట్ రేపు మధ్యాహ్నం 3 గంటలకు ఖరారైంది.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'kannada',
      code: 'kn-IN',
      name: 'Kannada',
      scriptChar: 'ಕ',
      region: 'KARNATAKA',
      sampleAudioText: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
      translation: '"Namaskara! How can I assist you?"',
      accentStyle: 'Bengaluru & Mysuru Dialect',
      speechRate: 1.0,
      sampleVoicePrompt: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ, ನಮ್ಮ ಪ್ರತಿನಿಧಿ ಕರೆ ಮಾಡುತ್ತಾರೆ.',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'punjabi',
      code: 'pa-IN',
      name: 'Punjabi',
      scriptChar: 'ਪ',
      region: 'PUNJAB & NORTH INDIA',
      sampleAudioText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
      translation: '"Sat Sri Akal! How can I help you?"',
      accentStyle: 'Ludhiana & Amritsar Commercial',
      speechRate: 1.0,
      sampleVoicePrompt: 'ਤੁਹਾਡਾ ਆਰਡਰ ਤਿਆਰ ਹੈ ਅਤੇ ਅੱਜ ਹੀ ਭੇਜ ਦਿੱਤਾ ਜਾਵੇਗਾ।',
      badgeText: 'Live Deployment Ready'
    },
    {
      id: 'malayalam',
      code: 'ml-IN',
      name: 'Malayalam',
      scriptChar: 'മ',
      region: 'KERALA',
      sampleAudioText: 'നമസ്കാരം! എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?',
      translation: '"Namaskaram! How may I help you?"',
      accentStyle: 'Kochi & Thiruvananthapuram Natural',
      speechRate: 1.0,
      sampleVoicePrompt: 'നിങ്ങളുടെ ബുക്കിംഗ് സ്ഥിരീകരിച്ചു, വാട്ട്‌സ്ആപ്പിൽ വിവരങ്ങൾ അയച്ചു.',
      badgeText: 'Live Deployment Ready'
    }
  ];

  const [activeLanguageForDemo, setActiveLanguageForDemo] = useState<VoiceLanguageItem | null>(voiceLanguages[0]);

  // Industry Solutions
  const industrySolutions: IndustrySolution[] = [
    {
      id: 'clinics-healthcare',
      title: 'Clinics & Healthcare',
      metric: '85% reduction in missed consultation calls',
      badge: 'Voice & WhatsApp',
      description: 'Automate appointment bookings, send regional language medicine reminders, and handle patient inquiries around the clock without overwhelming the front desk.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      tags: ['Voice AI', 'WhatsApp Reminders', 'EMR Integration'],
      features: [
        'Zero missed patient calls during peak clinic hours',
        'Direct doctor schedule sync into Google Calendar / Practo',
        'Prescription refilling & lab report lookup via WhatsApp'
      ],
      sampleWorkflow: {
        caller: 'Namaste, I want to book an appointment with Dr. Shah for tomorrow morning.',
        aiResponse: 'Namaste! Dr. Shah is available tomorrow at 10:30 AM and 11:45 AM. Which time slot suits you best?',
        outcome: 'Appointment booked & SMS confirmation dispatched in patient preferred Indian language.'
      }
    },
    {
      id: 'retail-d2c',
      title: 'Retail & Regional D2C',
      metric: '3.2x faster response time for new product inquiries',
      badge: 'Catalog WhatsApp AI',
      description: 'Automate product availability queries, order status lookups, and multilingual WhatsApp broadcast sequences that keep Indian shoppers engaged.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80',
      tags: ['Catalog Sharing', 'Order Tracking', 'Abandoned Cart Recovery'],
      features: [
        '40% reduction in repetitive customer support tickets',
        'Instant payment links with UPI & Razorpay support',
        'Order tracking & automated delivery confirmations'
      ],
      sampleWorkflow: {
        caller: 'Maro parcel kyare aavshe? Order number 4920 chhe.',
        aiResponse: 'Tamarun parcel dispatch thai gayun chhe ane aaje sanje 5 vagya sudhi BlueDart thi pahochshe.',
        outcome: 'Real-time courier API sync with zero manual staff intervention.'
      }
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Builders',
      metric: '92% lead qualification accuracy',
      badge: 'Lead Qualification',
      description: 'Qualify property buyer inquiries instantly from ad campaigns, share project brochures over WhatsApp, and schedule verified site visits 24/7.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      tags: ['Brochure Dispatch', 'Site Visit Booking', 'CRM Push'],
      features: [
        '3x faster response time for new project inquiries',
        'Automated budget, BHK, and timeline qualification',
        'Verified lead push directly into Salesforce/HubSpot/Google Sheets'
      ],
      sampleWorkflow: {
        caller: 'What is the starting price for 3 BHK in SG Highway project?',
        aiResponse: '3 BHK units start at ₹1.15 Cr with scenic club views. Would you like me to send the complete brochure on WhatsApp?',
        outcome: 'Brochure sent in 4 seconds; Site visit scheduled for Sunday.'
      }
    },
    {
      id: 'local-services',
      title: 'Local & Home Services',
      metric: '40% after-hours bookings captured',
      badge: '24/7 Booking AI',
      description: 'Capture service requests after hours, send instant quotes, and dispatch job updates to customers in their preferred regional dialect.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      tags: ['Emergency Dispatch', 'Instant Pricing', 'Technician Routing'],
      features: [
        'Instant response during late evening and weekend emergency calls',
        'Automated price estimation based on square footage / issue type',
        'Direct WhatsApp technician dispatch notification'
      ],
      sampleWorkflow: {
        caller: 'AC ma thi pani pade chhe, urgent technician joiye chhe.',
        aiResponse: 'Samjyo. Tamara area ma technician 45 minute ma aavi shaksho. Tamara address confirm karsho?',
        outcome: 'Job created in service portal with GPS coordinates.'
      }
    },
    {
      id: 'institutes-coaching',
      title: 'Institutes & Coaching',
      metric: '65% reduction in front-desk inquiry volume',
      badge: 'Admissions Assistant',
      description: 'Answer parent queries about fees, schedules, and test series in regional Indian languages, and qualify prospective student admissions automatically.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      tags: ['Syllabus PDF Push', 'Batch Timing Lookup', 'Demo Class Registration'],
      features: [
        'Higher admission inquiry conversion during peak seasons',
        'Batch schedules & fee structure breakdown in native language',
        'Automated entrance exam test date reminders via SMS'
      ],
      sampleWorkflow: {
        caller: 'Class 11 JEE batch kab start ho rahi hai aur fees kya hai?',
        aiResponse: 'JEE Foundation batch agle Monday se shuru ho rahi hai. Syllabus aur fee structure PDF WhatsApp par bhej diya gaya hai.',
        outcome: 'Parent registered for free Sunday demo lecture.'
      }
    },
    {
      id: 'manufacturing-b2b',
      title: 'Manufacturing & B2B Hubs',
      metric: '24/7 order & dispatch bot',
      badge: 'Order & Dispatch Bot',
      description: 'Keep dealers and suppliers updated on shipment tracking, pending ledger balances, and order confirmations without manual phone tag.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      tags: ['ERP Sync', 'Ledger Inquiries', 'Truck Tracking'],
      features: [
        'Consistent lead intake and RFQ capture during non-business hours',
        'Dealer invoice balance lookups synced directly with Tally / SAP',
        'Saves up to 15 administrative hours per operations desk weekly'
      ],
      sampleWorkflow: {
        caller: 'Last invoice nu payment receipt ane GST invoice dispatch thayu?',
        aiResponse: 'Ha sir, Invoice #902 nu payment receive thai gayun chhe ane dispatch Lorry #GJ01-8899 ma nikli gayu chhe.',
        outcome: 'Instant ERP lookup completed in 2.1 seconds.'
      }
    }
  ];

  // 3 Core Strategic Capabilities
  const capabilities: CapabilityCard[] = [
    {
      id: 'voice-agents',
      title: 'Native-Language Voice Agents',
      category: 'Pan-India Voice AI',
      icon: 'PhoneCall',
      description: 'Inbound & outbound phone agents speaking Hindi, Gujarati, Marathi, Bengali, Tamil, Telugu, Kannada, Punjabi, Malayalam & English with natural conversational cadence.',
      route: 'voice-agents'
    },
    {
      id: 'chatbots',
      title: 'Omnichannel Chatbots (WhatsApp, SMS & Website)',
      category: 'Unified Messaging & Web Chat',
      icon: 'Bot',
      description: '24/7 intelligent chat across WhatsApp Cloud API, transactional SMS alerts, and one-line embedded widgets for WordPress, Shopify, and custom websites.',
      route: 'chatbots'
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting & Custom Workflows',
      category: 'SME Process Automation',
      icon: 'Workflow',
      description: 'Hands-on workflow discovery, CRM/ERP integrations (Tally, Zoho, Salesforce), and practical deployment tailored specifically for Indian SME operations.',
      route: 'consulting'
    }
  ];

  // 4 Deployment Steps
  const deploymentSteps: DeploymentStep[] = [
    {
      stepNumber: '01',
      category: 'DISCOVERY & MAPPING',
      title: 'Understand',
      description: 'We audit your customer inquiry volume, missed call points, and high-frequency queries to map exact automation opportunities.',
      tag: 'Operational workflow audit'
    },
    {
      stepNumber: '02',
      category: 'NATIVE AI CONFIGURATION',
      title: 'Build',
      description: 'We configure voice agents and messaging bots across all major Indian languages tuned with your specific business rules and product details.',
      tag: 'Pan-Indian multi-dialect calibration'
    },
    {
      stepNumber: '03',
      category: 'ZERO-DOWNTIME DEPLOYMENT',
      title: 'Integrate',
      description: 'We connect the AI workflows directly into your current WhatsApp numbers, telephony channels, and CRM or Google Sheets.',
      tag: 'No system overhaul needed'
    },
    {
      stepNumber: '04',
      category: 'ONGOING OPTIMIZATION',
      title: 'Improve',
      description: 'We monitor live interaction quality, resolve dialect edge-cases, and provide hands-on monthly tuning to maximize conversion rates.',
      tag: 'Measurable weekly reporting'
    }
  ];

  // 6 Consulting Steps
  const consultingSteps: ConsultingStep[] = [
    {
      id: 'step-1',
      step: 'Step 1: Discover',
      title: 'High-Value Workflow Audits',
      description: 'We pinpoint exact manual bottlenecks in your sales, support, and dispatch queues, scoring each for immediate automation ROI.',
      keyOutcome: '40%+ manual time reclaimable',
      icon: 'Search'
    },
    {
      id: 'step-2',
      step: 'Step 2: Blueprint',
      title: 'Custom Automation Roadmaps',
      description: "Get a phased execution plan designed around your team's existing software stack, avoiding costly infrastructure reboots.",
      keyOutcome: 'Zero disruption to daily ops',
      icon: 'Map'
    },
    {
      id: 'step-3',
      step: 'Step 3: Deploy',
      title: 'Native-Language Integrations',
      description: 'Connect automated voice and WhatsApp workflows that speak all major Indian languages with natural conversational tone.',
      keyOutcome: '100% regional language ready',
      icon: 'Cpu'
    },
    {
      id: 'step-4',
      step: 'Step 4: Measure',
      title: 'Measurable Impact Dashboards',
      description: 'Track response latencies, resolution percentages, and lead qualification throughput with clear, unfluffed metrics.',
      keyOutcome: 'Under 1-minute resolution time',
      icon: 'BarChart3'
    },
    {
      id: 'step-5',
      step: 'Step 5: Handover',
      title: 'Hands-on Team Enablement',
      description: 'We train your internal operational staff with straightforward playbooks so your business remains self-reliant.',
      keyOutcome: '3 on-site/staff workshops',
      icon: 'Users'
    },
    {
      id: 'step-6',
      step: 'Step 6: Protect',
      title: 'Reliable & Secure Guardrails',
      description: 'Every automated workflow operates with strict human-in-the-loop triggers and data safety standards tailored for Indian enterprises.',
      keyOutcome: 'Human escalation built-in',
      icon: 'ShieldCheck'
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 't-1',
      quote: "Sampark's voice agents transformed how we handle calls. Patient inquiries in native regional languages are answered instantly, making our admission process faster and far more reliable.",
      author: 'Ravi Patel',
      role: 'Owner',
      company: 'Health & Diagnostics Center',
      location: 'Ahmedabad, Gujarat',
      highlightMetric: '98% call answer rate',
      metricLabel: 'Patient Care'
    },
    {
      id: 't-2',
      quote: "Automating our WhatsApp chats helped us respond instantly to property leads and book site visits before competitors even replied to the initial message.",
      author: 'Neha Singh',
      role: 'Sales Director',
      company: 'Vrundavan Living Properties',
      location: 'Surat & Mumbai',
      highlightMetric: '40% faster deal response',
      metricLabel: 'Real Estate Sales'
    },
    {
      id: 't-3',
      quote: "As a regional distribution company, their team connected WhatsApp order confirmations directly into our ERP in less than ten days. No complex IT reboots.",
      author: 'Rajesh Shah',
      role: 'Managing Director',
      company: 'Apex Industrial Supply Co.',
      location: 'Vadodara & Pune',
      highlightMetric: '25+ hrs saved weekly',
      metricLabel: 'B2B Logistics'
    }
  ];

  // Form Submission Handler
  const submitContactForm = async (data: DemoBookingFormData): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    try {
      const existing = JSON.parse(localStorage.getItem('sampark_demo_submissions') || '[]');
      existing.push({
        ...data,
        submittedAt: new Date().toISOString(),
        id: 'DEMO-' + Math.floor(100000 + Math.random() * 900000)
      });
      localStorage.setItem('sampark_demo_submissions', JSON.stringify(existing));
    } catch {
      // storage error fallback
    }

    return {
      success: true,
      message: `Thank you, ${data.fullName}! Your request for ${data.businessName} has been received. Our native-language AI specialist will connect with you at ${data.phone}.`
    };
  };

  return (
    <WordPressContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        siteSettings,
        voiceLanguages,
        industrySolutions,
        deploymentSteps,
        capabilities,
        consultingSteps,
        testimonials,
        predefinedVoiceAgents,
        activePredefinedAgentId,
        setActivePredefinedAgentId,
        isDemoModalOpen,
        setIsDemoModalOpen,
        demoPrefillService,
        openDemoModalWithService,
        isVoiceSimulatorOpen,
        setIsVoiceSimulatorOpen,
        activeLanguageForDemo,
        setActiveLanguageForDemo,
        submitContactForm,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </WordPressContext.Provider>
  );
};

export const useWordPressContent = () => {
  const context = useContext(WordPressContext);
  if (!context) {
    throw new Error('useWordPressContent must be used within a WordPressContentProvider');
  }
  return context;
};


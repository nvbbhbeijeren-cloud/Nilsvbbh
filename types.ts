
export interface Place {
  id: string;
  name: string;
  type: 'restaurant' | 'fastfood' | 'culture' | 'activity' | 'shop';
  description: string;
  address: string;
  isPartner: boolean;
  discount?: string; // Premium only
  publicDiscount?: { // Free/Public deal
    text: string;
    link: string;
  };
  coordinates: { lat: number; lng: number };
  imageUrl: string;
}

export interface DayPlan {
  day: number;
  activities: {
    time: string;
    activity: string;
    description: string;
    location?: string;
  }[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index
  explanation: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  MAP = 'MAP',
  PLANNER = 'PLANNER',
  PREMIUM = 'PREMIUM'
}

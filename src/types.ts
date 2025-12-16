import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const SectionId = {
  HOME: 'home',
  SERVICES: 'services',
  DIFFERENCE: 'difference',
  AV_INFO: 'av-info',
  CONTACT: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];


export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
import {
  Activity,
  Ambulance,
  Award,
  BadgeCheck,
  Baby,
  Bone,
  Building2,
  Calendar,
  Clock,
  Eye,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
  type LucideIcon,
} from 'lucide-react';

/**
 * Config stores icon choices as strings (it has to be serializable), so this
 * is the one place that maps those strings to actual components. Shared by
 * Statistics and WhyChooseUs since both pull icon names from the same config.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Ambulance,
  Award,
  BadgeCheck,
  Baby,
  Bone,
  Building2,
  Calendar,
  Clock,
  Eye,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
};

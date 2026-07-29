import { Activity, Apple, Award, Calendar, Dumbbell, Star, Trophy, Users, type LucideIcon } from 'lucide-react';

/**
 * Config stores icon choices as strings (it has to be serializable), so this
 * is the one place that maps those strings to actual components. Shared by
 * Stats and WhyChooseUs since both pull icon names from the same config.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Dumbbell,
  Trophy,
  Activity,
  Star,
  Award,
  Apple,
  Calendar,
};

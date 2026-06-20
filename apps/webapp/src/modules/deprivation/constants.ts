import {
  Baby,
  BookA,
  GraduationCap,
  Heart,
  House,
  type LucideIcon,
  PiggyBank,
  Siren,
  Trees,
  User,
} from "lucide-react";

export const DOMAIN_ICONS: Record<string, LucideIcon> = {
  income: PiggyBank,
  employment: GraduationCap,
  education: BookA,
  health: Heart,
  crime: Siren,
  housing: House,
  environment: Trees,
  idaci: Baby,
  idaopi: User,
};

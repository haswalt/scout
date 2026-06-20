import { Typography } from "@repo/ui/typography";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  value: string;
};

export const PropertySpec = ({ icon: Glyph, value }: Props) => {
  return (
    <Typography variant="caption" tone="accentMuted">
      <Glyph size="18" />
      {value}
    </Typography>
  );
};

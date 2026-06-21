import { VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";

type EmptyStateProps = {
  description: string;
  headingAs?: "h1" | "h2";
  title: string;
};

export const EmptyState = ({
  description,
  headingAs = "h2",
  title,
}: EmptyStateProps) => (
  <VStack alignItems="start" gap="sm" py="lg" role="status" aria-live="polite">
    <Typography as={headingAs} variant="title" tone="heading">
      {title}
    </Typography>
    <Typography tone="muted">{description}</Typography>
  </VStack>
);

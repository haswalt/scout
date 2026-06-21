import { VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";
import { MapViewSkeleton } from "./MapViewSkeleton";

export const PropertiesSkeleton = () => {
  return (
    <VStack gap="md" role="status" aria-label="Loading homes for sale nearby">
      <Typography as="h2" variant="eyebrow" tone="label">
        Homes for sale nearby
      </Typography>
      <MapViewSkeleton />
    </VStack>
  );
};

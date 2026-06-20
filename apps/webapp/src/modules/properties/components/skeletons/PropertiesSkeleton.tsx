import { VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";
import { MapViewSkeleton } from "./MapViewSkeleton";

export const PropertiesSkeleton = () => {
  return (
    <VStack gap="md">
      <Typography variant="eyebrow" tone="label">
        Homes for sale nearby
      </Typography>
      <MapViewSkeleton />
    </VStack>
  );
};

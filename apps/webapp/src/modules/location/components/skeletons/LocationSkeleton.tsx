import { VStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const LocationSkeleton = () => {
  return (
    <VStack
      gap="sm"
      alignItems="start"
      role="status"
      aria-label="Loading area details"
    >
      <Skeleton aria-hidden="true" shape="text" w="250px" h="2rem" />
      <Skeleton aria-hidden="true" shape="text" w="150px" />
    </VStack>
  );
};

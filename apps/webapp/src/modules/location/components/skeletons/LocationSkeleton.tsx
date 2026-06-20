import { VStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const LocationSkeleton = () => {
  return (
    <VStack gap="sm" alignItems="start">
      <Skeleton shape="text" w="250px" h="2rem" />
      <Skeleton shape="text" w="150px" />
    </VStack>
  );
};

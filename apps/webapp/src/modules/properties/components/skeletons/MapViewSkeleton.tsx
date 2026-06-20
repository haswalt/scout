import { Skeleton } from "@repo/ui/skeleton";

export const MapViewSkeleton = () => {
  return (
    <Skeleton shape="block" rounded="md" h={{ base: "260px", md: "340px" }} />
  );
};

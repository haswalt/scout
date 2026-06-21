import { Skeleton } from "@repo/ui/skeleton";

export const MapViewSkeleton = () => {
  return (
    <Skeleton
      aria-hidden="true"
      shape="block"
      rounded="md"
      h={{ base: "280px", md: "380px" }}
    />
  );
};

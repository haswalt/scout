import { Card, CardBody, CardHeader } from "@repo/ui/card";
import { VStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const StatCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton aria-hidden="true" shape="block" w="38px" h="38px" />
        <Skeleton aria-hidden="true" shape="pill" width="86px" height="18px" />
      </CardHeader>
      <CardBody>
        <VStack gap="xs" alignItems="start">
          <Skeleton aria-hidden="true" w="40%" />
          <Skeleton aria-hidden="true" w="50%" />
        </VStack>
      </CardBody>
    </Card>
  );
};

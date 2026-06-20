import { Card, CardBody, CardHeader } from "@repo/ui/card";
import { VStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const StatCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton shape="block" w="38px" h="38px" />
        <Skeleton shape="pill" width="86px" height="18px" />
      </CardHeader>
      <CardBody>
        <VStack gap="xs" alignItems="start">
          <Skeleton w="40%" />
          <Skeleton w="50%" />
        </VStack>
      </CardBody>
    </Card>
  );
};

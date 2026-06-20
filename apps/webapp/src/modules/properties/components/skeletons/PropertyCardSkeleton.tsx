"use client";

import { Card, CardBody } from "@repo/ui/card";
import { Skeleton } from "@repo/ui/skeleton";

export const PropertyCardSkeleton = () => {
  return (
    <Card>
      <Skeleton shape="block" h="138px" />
      <CardBody gap="md">
        <Skeleton h="15px" w="70%" />
        <Skeleton h="15px" w="50%" />
        <Skeleton h="15px" w="80%" />
      </CardBody>
    </Card>
  );
};

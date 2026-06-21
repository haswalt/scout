import { Card, CardBody } from "@repo/ui/card";
import { Box, Flex, HStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const GlanceCardSkeleton = () => {
  return (
    <Box>
      <HStack gap="sm" mb="md" flexWrap="wrap" alignItems="baseline">
        <Skeleton aria-hidden="true" w="10%" />
        <Skeleton aria-hidden="true" w="20%" />
      </HStack>
      <Card row>
        <CardBody>
          <Skeleton aria-hidden="true" shape="block" w="56px" height="56px" />

          <Flex flex="1" direction="column" gap="sm">
            <Skeleton aria-hidden="true" w="40%" />
            <Skeleton aria-hidden="true" w="35%" />
          </Flex>

          <Flex direction="column" gap="sm" align="end">
            <Skeleton aria-hidden="true" w="48px" />
            <Skeleton aria-hidden="true" w="68px" />
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

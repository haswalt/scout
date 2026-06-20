import { Card, CardBody } from "@repo/ui/card";
import { Box, Flex, HStack } from "@repo/ui/jsx";
import { Skeleton } from "@repo/ui/skeleton";

export const GlanceCardSkeleton = () => {
  return (
    <Box>
      <HStack gap="sm" mb="md" flexWrap="wrap" alignItems="baseline">
        <Skeleton w="10%" />
        <Skeleton w="20%" />
      </HStack>
      <Card row>
        <CardBody>
          <Skeleton shape="block" w="56px" height="56px" />

          <Flex flex="1" direction="column" gap="sm">
            <Skeleton w="40%" />
            <Skeleton w="35%" />
          </Flex>

          <Flex direction="column" gap="sm" align="end">
            <Skeleton w="48px" />
            <Skeleton w="68px" />
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

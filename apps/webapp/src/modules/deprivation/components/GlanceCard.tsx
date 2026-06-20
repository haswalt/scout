import { getToneLabel } from "@/lib/utils";
import type { DeprivationResponse } from "@repo/homedata";
import { Card, CardBody } from "@repo/ui/card";
import { Box, HStack, VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";

type Props = {
  data: DeprivationResponse;
};

export const GlanceCard = ({ data }: Props) => {
  const tone = getToneLabel(data.overall.decile);

  return (
    <Box>
      <HStack gap="sm" mb="md" flexWrap="wrap" alignItems="baseline">
        <Typography variant="eyebrow" tone="label">
          Area at a glance
        </Typography>
        <Typography variant="caption" tone="faint">
          {data.metadata.source}
        </Typography>
      </HStack>
      <Card row>
        <CardBody>
          <VStack
            as="span"
            gap="0"
            justifyContent="center"
            w="52px"
            h="52px"
            rounded="md"
            flexShrink="0"
            bg={`${tone}.bg`}
            color={`${tone}.fg`}
          >
            <Typography as="span" variant="stat" tone="inherit">
              {data.overall?.decile}
            </Typography>
            <Typography as="span" variant="caption" tone="inherit">
              /10
            </Typography>
          </VStack>
          <Box flex="1" minW="0">
            <Typography variant="title" tone="heading">
              {data.overall?.short_label}
            </Typography>
            <Typography variant="caption" tone="muted">
              {data.overall?.lad_rank_description}
            </Typography>
          </Box>
          <Typography variant="eyebrow" tone="label" align="end">
            Overall
            <br /> deprivation
          </Typography>
        </CardBody>
      </Card>
    </Box>
  );
};

import { getToneLabel } from "@/lib/utils";
import type { DeprivationDomain } from "@repo/homedata";
import { Badge } from "@repo/ui/badge";
import { Card, CardBody, CardHeader } from "@repo/ui/card";
import { IconTile } from "@repo/ui/icon-tile";
import { HStack, VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";
import { Info } from "lucide-react";
import { DOMAIN_ICONS } from "../constants";

type Props = {
  domain: DeprivationDomain;
};

export const StatCard = ({ domain }: Props) => {
  const tone = getToneLabel(domain.decile);
  const Icon = DOMAIN_ICONS[domain.domain];

  return (
    <Card>
      <CardHeader>
        <IconTile size="sm">{Icon ? <Icon /> : <Info />}</IconTile>
        <Badge tone={tone} dot>
          {domain.score_label}
        </Badge>
      </CardHeader>
      <CardBody>
        <VStack gap="xs" alignItems="start">
          <HStack gap="sm" alignItems="baseline">
            <Typography as="span" variant="stat">
              {domain.decile}/10
            </Typography>
            <Typography as="span" variant="caption" tone="label">
              decile
            </Typography>
          </HStack>
          <Typography variant="caption" tone="muted">
            {domain.label}
          </Typography>
        </VStack>
      </CardBody>
    </Card>
  );
};

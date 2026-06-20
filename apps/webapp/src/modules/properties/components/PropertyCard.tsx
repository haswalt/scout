import { type PropertyListing } from "@repo/homedata";
import { Badge } from "@repo/ui/badge";
import { Card, CardBody, CardFooter, CardMedia } from "@repo/ui/card";
import { Box, Flex, HStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";
import { PropertySpec } from "./PropertySpec";
import { Bath, Bed, Sofa } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type Props = {
  index: number;
  property: PropertyListing;
};

export const PropertyCard = ({ index, property }: Props) => {
  return (
    <Card aria-label={`${property.latest_price}, ${property.street}`}>
      <CardMedia
        height="130px"
        backgroundImage="repeating-linear-gradient(135deg, {colors.lilac.100} 0 11px, {colors.lilac.200} 11px 22px)"
      >
        <HStack gap="xs" position="absolute" top="10px" left="10px">
          <Badge tone="accent">{property.latest_status}</Badge>
          {property.is_reduced && <Badge tone="danger">Reduced</Badge>}
          {property.ownership === "Freehold" && (
            <Badge tone="success">Freehold</Badge>
          )}
        </HStack>

        <Flex
          position="absolute"
          top="10px"
          right="10px"
          w="26px"
          h="26px"
          rounded="full"
          align="center"
          justify="center"
          bg="accent"
          color="white"
          fontWeight="800"
          fontSize="13px"
        >
          {index}
        </Flex>
      </CardMedia>

      <CardBody display="flex" flexDirection="column" gap="md">
        <Box>
          <Typography variant="title" tone="heading">
            {formatCurrency(property.latest_price)}
          </Typography>
          <Typography variant="caption">{property.street}</Typography>
          <Typography variant="caption" tone="faint">
            {property.bedrooms} bed, {property.property_type}
          </Typography>
        </Box>

        <HStack gap="md">
          <PropertySpec icon={Bed} value={`${property.bedrooms}`} />
          <PropertySpec icon={Bath} value={`${property.bathrooms}`} />
          <PropertySpec
            icon={Sofa}
            value={`${property.reception_rooms ?? 0}`}
          />
        </HStack>

        <Flex gap="xs" flexWrap="wrap">
          {property.is_new_build && <Badge soft>New Build</Badge>}
          {property.has_garden && <Badge soft>Garden</Badge>}
          {property.has_parking && <Badge soft>Parking</Badge>}
          {property.has_solar_panels && <Badge soft>Solar</Badge>}
        </Flex>
      </CardBody>

      <CardFooter>
        <Typography variant="caption" tone="faint">
          {property.days_on_market} days on market
        </Typography>
        <Typography variant="caption" tone="label">
          {property.agent_name}
        </Typography>
      </CardFooter>
    </Card>
  );
};

import { Grid, Stack, styled } from "@repo/ui/jsx";
import { MapViewSkeleton } from "./skeletons/MapViewSkeleton";
import { Typography } from "@repo/ui/typography";
import { fetchProperties } from "@/lib/actions";
import { PropertyCard } from "./PropertyCard";
import { Map } from "@vis.gl/react-maplibre";
import { Suspense } from "react";
import { PropertiesMap } from "./PropertiesMap";

type Props = {
  postcode: string;
};

export const PropertiesContent = async ({ postcode }: Props) => {
  const results = await fetchProperties(postcode);

  return (
    <Stack gap="md">
      <Typography variant="eyebrow" tone="accent">
        Homes for sale nearby
      </Typography>

      <Suspense fallback={<MapViewSkeleton />}>
        <PropertiesMap properties={results} />
      </Suspense>

      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="md"
      >
        {results?.map((p, i) => (
          <PropertyCard key={p.id} index={i + 1} property={p} />
        ))}
      </Grid>
    </Stack>
  );
};

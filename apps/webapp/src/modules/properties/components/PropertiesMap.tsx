"use client";

import { styled } from "@repo/ui/jsx";
import Map from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

// @TODO: The map doesn't display any properties nor is it centered on the postcode
//        as our test service postcode geocoding doesn't currently work.
// type Props = {
//   properties: PropertyListing[] | undefined;
// };
export const PropertiesMap = () => {
  return (
    <styled.div
      rounded="md"
      h={{ base: "280px", md: "380px" }}
      overflow="hidden"
      role="region"
      aria-label="Map showing the searched area"
    >
      <Map
        initialViewState={{
          longitude: 1.088,
          latitude: 50.8198,
          zoom: 6,
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
    </styled.div>
  );
};

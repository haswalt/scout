"use client";

import { PropertyListing } from "@repo/homedata";
import { styled } from "@repo/ui/jsx";
import Map from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

type Props = {
  properties: PropertyListing[] | undefined;
};

// @TODO: The map doesn't display any properties nor is it centered on the postcode
//        as our test service postcode geocoding doesn't currently work.
export const PropertiesMap = ({ properties }: Props) => {
  return (
    <styled.div
      rounded="md"
      h={{ base: "260px", md: "240px" }}
      overflow="hidden"
    >
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
    </styled.div>
  );
};

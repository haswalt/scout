import { Suspense } from "react";
import { LocationSkeleton } from "./components/skeletons/LocationSkeleton";
import { LocationContent } from "./components/LocationContent";

type Props = {
  postcode: string;
};

export const LocationModule = ({ postcode }: Props) => {
  return (
    <Suspense fallback={<LocationSkeleton />}>
      <LocationContent postcode={postcode} />
    </Suspense>
  );
};

import { Suspense } from "react";
import { PropertiesSkeleton } from "./components/skeletons/PropertiesSkeleton";
import { PropertiesContent } from "./components/PropertiesContent";

type Props = {
  postcode: string;
};

export const PropertiesModule = ({ postcode }: Props) => {
  return (
    <Suspense fallback={<PropertiesSkeleton />}>
      <PropertiesContent postcode={postcode} />
    </Suspense>
  );
};

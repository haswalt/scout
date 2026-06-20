import { Suspense } from "react";
import { DeprivationSkeleton } from "./components/skeletons/DeprivationSkeleton";
import { DeprivationContent } from "./components/DeprivationContent";

type Props = {
  postcode: string;
};

export const DeprivationModule = ({ postcode }: Props) => {
  return (
    <Suspense fallback={<DeprivationSkeleton />}>
      <DeprivationContent postcode={postcode} />
    </Suspense>
  );
};

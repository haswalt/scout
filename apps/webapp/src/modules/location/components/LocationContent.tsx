import { EmptyState } from "@/components/empty-state";
import { fetchLocation } from "@/lib/actions";
import { VStack } from "@repo/ui/jsx";
import { Typography } from "@repo/ui/typography";

type Props = {
  postcode: string;
};

export const LocationContent = async ({ postcode }: Props) => {
  const result = await fetchLocation(postcode);

  if (!result) {
    return (
      <EmptyState
        headingAs="h1"
        title="Area details unavailable"
        description={`We couldn't load location details for ${postcode.toUpperCase()}.`}
      />
    );
  }

  return (
    <VStack gap="sm" alignItems="start">
      <Typography as="h1" variant="heading" tone="heading">
        {result.street}
      </Typography>
      <Typography variant="caption" tone="muted">
        {result.town}
      </Typography>
    </VStack>
  );
};

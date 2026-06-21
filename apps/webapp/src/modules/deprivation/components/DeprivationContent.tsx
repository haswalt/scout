import { EmptyState } from "@/components/empty-state";
import { fetchDeprivationData } from "@/lib/actions";
import { Flex, Grid } from "@repo/ui/jsx";
import { SummaryCard } from "./SummaryCard";
import { GlanceCard } from "./GlanceCard";
import { StatCard } from "./StatCard";

type Props = {
  postcode: string;
};
export const DeprivationContent = async ({ postcode }: Props) => {
  const result = await fetchDeprivationData(postcode);

  if (!result) {
    return (
      <EmptyState
        title="Area profile unavailable"
        description="We couldn't load the local area profile right now. Please try again later."
      />
    );
  }

  return (
    <Flex
      as="section"
      direction="column"
      gap="lg"
      aria-label="Local area profile"
    >
      <SummaryCard data={result} />

      <GlanceCard data={result} />

      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="md"
        mb="lg"
      >
        {result.domains?.map((d) => (
          <StatCard key={d.label} domain={d} />
        ))}
      </Grid>
    </Flex>
  );
};

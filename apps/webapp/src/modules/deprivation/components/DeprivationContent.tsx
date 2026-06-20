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
    return null;
  }

  return (
    <Flex direction="column" gap="lg">
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

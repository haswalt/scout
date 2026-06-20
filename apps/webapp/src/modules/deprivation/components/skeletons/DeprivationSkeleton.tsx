import { Flex, Grid } from "@repo/ui/jsx";
import { StatCardSkeleton } from "./StatCardSkeleton";
import { GlanceCardSkeleton } from "./GlanceCardSkeleton";
import { AiSummary } from "@repo/ui/ai-summary";

export const DeprivationSkeleton = () => {
  return (
    <Flex direction="column" gap="lg">
      <AiSummary streaming />

      <GlanceCardSkeleton />

      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="md"
        mb="lg"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </Grid>
    </Flex>
  );
};

import { Header } from "@/components/header";
import { Box, Container, Flex, styled } from "@repo/ui/jsx";
import { PropertiesModule } from "@/modules/properties";
import { DeprivationModule } from "@/modules/deprivation";
import { LocationModule } from "@/modules/location";

type ExplorePageProps = {
  params: Promise<{
    postcode: string;
  }>;
};

export default async function ExplorePage({ params }: ExplorePageProps) {
  const { postcode } = await params;

  return (
    <Box bg="bg" minH="100dvh">
      <Header />

      <styled.main>
        <Container maxW="shell" pt="lg" pb="lg">
          <Flex direction="column" flex="1" gap="lg">
            <LocationModule postcode={postcode} />

            <DeprivationModule postcode={postcode} />

            <PropertiesModule postcode={postcode} />
          </Flex>
        </Container>
      </styled.main>
    </Box>
  );
}

"use client";

import { Container, HStack, styled } from "@repo/ui/jsx";
import { Search } from "@repo/ui/search";
import { Typography } from "@repo/ui/typography";
import { useParams } from "next/navigation";

export const Header = () => {
  const { postcode } = useParams<{ postcode: string }>();

  return (
    <styled.header
      position="sticky"
      top="0"
      zIndex="20"
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="shell" py="md">
        <HStack gap="lg" justify="space-between">
          <Typography variant="title" tone="heading">
            Scout
          </Typography>

          <Search size="header" value={decodeURIComponent(postcode)} readOnly />
        </HStack>
      </Container>
    </styled.header>
  );
};

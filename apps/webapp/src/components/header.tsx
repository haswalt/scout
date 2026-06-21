"use client";

import { normalizePostcode } from "@/lib/utils";
import { Container, HStack, styled } from "@repo/ui/jsx";
import { Search } from "@repo/ui/search";
import { Typography } from "@repo/ui/typography";
import Link from "next/link";
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
          <Link href="/" aria-label="Scout home">
            <Typography as="span" variant="title" tone="heading">
              Scout
            </Typography>
          </Link>

          <Search
            size="header"
            value={normalizePostcode(decodeURIComponent(postcode))}
            readOnly
          />
        </HStack>
      </Container>
    </styled.header>
  );
};

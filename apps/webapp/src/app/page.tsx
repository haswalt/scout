"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { Box, Center, Flex, VStack, Wrap } from "@repo/ui/jsx";
import { Search } from "@repo/ui/search";
import { Typography } from "@repo/ui/typography";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  postcode: z.string().min(3),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      postcode: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = ({ postcode }) => {
    router.push(`/${postcode}`);
  };

  return (
    <Center as="main" minH="100dvh" p="lg" bg="bg">
      <VStack gap="md" textAlign="center" maxW="560px" w="100%">
        <Typography variant="eyebrow" tone="soft" as="h2" align="center">
          Scout
        </Typography>
        <Typography variant="display" tone="heading" as="h1" align="center">
          Discover your next neighbourhood
        </Typography>
        <Typography align="center" tone="muted">
          Enter any UK postcode and get an instant, friendly profile of the
          area.
        </Typography>

        <Search
          size="hero"
          onSubmit={handleSubmit(onSubmit)}
          valid={isValid && !isSubmitting}
          placeholder="Try a postcode, e.g. BS8 2NT"
          autoComplete="postal-code"
          {...register("postcode")}
        />

        <Wrap gap="sm" justify="center" align="center">
          <Typography variant="caption" tone="soft">
            Popular:
          </Typography>
          <Button variant="chip" size="sm">
            Clifton, Bristol
          </Button>
        </Wrap>
      </VStack>
    </Center>
  );
}

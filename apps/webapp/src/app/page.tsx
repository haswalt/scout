"use client";

import { ADDRESS_SUGGESTIONS } from "@/config/constants";
import { fetchPostcode } from "@/lib/actions";
import { isUkPostcode, postcodeToSlug } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { Center, VStack, Wrap } from "@repo/ui/jsx";
import { Search } from "@repo/ui/search";
import { Typography } from "@repo/ui/typography";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  address: z.string().min(3),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async ({ address }) => {
    const postcode = isUkPostcode(address)
      ? postcodeToSlug(address)
      : await fetchPostcode(address);

    if (!postcode) {
      setError("address", {
        message: "We couldn't find that location. Try a postcode or address.",
      });
      return;
    }

    router.push(`/${postcode}`, {
      transitionTypes: ["nav-forward"],
    });
  };

  const applySuggestion = (postcode: string) => {
    router.push(`/${postcodeToSlug(postcode)}`, {
      transitionTypes: ["nav-forward"],
    });
  };

  return (
    <Center as="main" minH="100dvh" p="lg" bg="bg">
      <VStack gap="md" textAlign="center" maxW="prose" w="100%">
        <Typography variant="eyebrow" tone="label" as="p">
          Scout
        </Typography>
        <Typography variant="display" tone="heading" as="h1" align="center">
          Discover your next neighbourhood
        </Typography>
        <Typography variant="body" tone="muted" align="center">
          Enter any UK postcode and get an instant, friendly profile of the
          area.
        </Typography>

        <Search
          size="hero"
          onSubmit={handleSubmit(onSubmit)}
          valid={isValid && !isSubmitting}
          placeholder="Try a postcode, e.g. BS8 2NT"
          autoComplete="postal-code"
          loading={isSubmitting}
          aria-describedby={errors.address ? "address-error" : undefined}
          aria-invalid={Boolean(errors.address)}
          {...register("address")}
        />
        {errors.address && (
          <Typography
            id="address-error"
            role="alert"
            variant="caption"
            tone="danger"
          >
            {errors.address.message}
          </Typography>
        )}

        <Wrap gap="sm" justify="center" align="center">
          <Typography variant="caption" tone="label">
            Popular:
          </Typography>
          {ADDRESS_SUGGESTIONS.map((as) => (
            <Button
              key={as.postcode}
              variant="chip"
              size="sm"
              onClick={() => applySuggestion(as.postcode)}
            >
              {as.label}
            </Button>
          ))}
        </Wrap>
      </VStack>
    </Center>
  );
}

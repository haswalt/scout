"use client";

import { useCompletion } from "@ai-sdk/react";
import { DeprivationResponse } from "@repo/homedata";
import { AiSummary } from "@repo/ui/ai-summary";
import { useEffect, useRef } from "react";

type Props = {
  data: DeprivationResponse;
};

export const SummaryCard = ({ data }: Props) => {
  const hasFetched = useRef(false);

  const { completion, complete, isLoading, stop, error } = useCompletion({
    api: "/api/summary",
    streamProtocol: "text",
    onError: (err) => console.error(err),
  });

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;

      complete("", {
        body: {
          deprivationData: data,
        },
      });
    }
  }, [data, complete]);

  return <AiSummary streaming={isLoading} summary={completion} />;
};

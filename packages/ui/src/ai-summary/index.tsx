"use client";

import { SparkleIcon } from "lucide-react";
import { aiSummaryStyles } from "./styles";
import { Typography } from "../typography";
import { type AiSummaryProps } from "./types";

/**
 * TODO: Describe the purpose, semantics, and accessibility contract for
 * AiSummary.
 *
 * @example
 * ```tsx
 * <AiSummary summary="Summary text" streaming />
 * ```
 */
export const AiSummary = ({ streaming, summary }: AiSummaryProps) => {
  const styles = aiSummaryStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.tag}>
          <SparkleIcon size={12} />
          <Typography as="span" variant="caption" tone="accent">
            AI summary
          </Typography>
        </div>
        {streaming && (
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <Typography as="span" variant="caption" tone="accentMid">
              analysing&hellip;
            </Typography>
          </div>
        )}
      </div>
      <Typography variant="editorial" tone="heading">
        {summary}
        {streaming && <span className={styles.cursor} />}
      </Typography>
    </div>
  );
};

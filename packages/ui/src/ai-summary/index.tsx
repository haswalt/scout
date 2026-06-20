"use client";

import { SparkleIcon } from "lucide-react";
import { cx } from "../../styled-system/css";
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
export const AiSummary = ({
  streaming,
  summary,
  className,
  ...props
}: AiSummaryProps) => {
  const styles = aiSummaryStyles();

  return (
    <div className={cx(styles.root, className)} {...props}>
      <div className={styles.header}>
        <div className={styles.tag}>
          <SparkleIcon size={12} aria-hidden="true" />
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
      <Typography variant="editorial" tone="heading" aria-live="polite">
        {summary}
        {streaming && <span className={styles.cursor} />}
      </Typography>
    </div>
  );
};

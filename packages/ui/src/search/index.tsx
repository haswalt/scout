"use client";

import { Pin } from "lucide-react";
import { searchStyles } from "./styles";
import { type SearchProps } from "./types";
import { Button } from "../button";
import { styled } from "../../styled-system/jsx";
import { Typography } from "../typography";

/**
 * Postcode search field with a submit action.
 *
 * The input defaults to the accessible name "Search by postcode". Consumers
 * may override it with `aria-label` or connect a visible label using
 * `aria-labelledby`. Submission is disabled unless `valid` is true.
 *
 * @example
 * ```tsx
 * <Search
 *   valid={isValid}
 *   onSubmit={handleSubmit}
 *   autoComplete="postal-code"
 * />
 * ```
 */
export const Search = ({
  onSubmit,
  size,
  valid,
  loading,
  readOnly,
  ...props
}: SearchProps) => {
  const styles = searchStyles({ size });

  const Root = readOnly ? styled.div : styled.form;

  return (
    <Root className={styles.root} onSubmit={onSubmit}>
      <Pin className={styles.icon} aria-hidden="true" />
      {readOnly ? (
        <Typography variant="eyebrow">{props.value}</Typography>
      ) : (
        <input
          name="search"
          type="text"
          className={styles.input}
          aria-label="Search by postcode"
          {...props}
        />
      )}
      {!readOnly && (
        <div className={styles.submit}>
          <Button
            type="submit"
            size={size === "header" ? "sm" : "lg"}
            disabled={!valid}
            loading={loading}
          >
            Explore
          </Button>
        </div>
      )}
    </Root>
  );
};

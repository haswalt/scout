"use client";

import { Pin } from "lucide-react";
import { searchStyles } from "./styles";
import { type SearchProps } from "./types";
import { Button } from "../button";
import { styled } from "../../styled-system/jsx";

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
export const Search = ({ onSubmit, size, valid, ...props }: SearchProps) => {
  const styles = searchStyles({ size });

  return (
    <styled.form className={styles.root} onSubmit={onSubmit}>
      <Pin className={styles.icon} aria-hidden="true" />
      <input
        type="text"
        className={styles.input}
        aria-label="Search by postcode"
        {...props}
      />
      <div className={styles.submit}>
        <Button type="submit" size="lg" disabled={!valid}>
          Explore
        </Button>
      </div>
    </styled.form>
  );
};

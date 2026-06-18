"use client";

import { type ElementType } from "react";
import { cx } from "../../styled-system/css";
import { typographyStyles } from "./styles";
import { type TypographyProps } from "./types";

/**
 * Polymorphic text primitive backed by Scout typography recipes.
 *
 * Use `as` to preserve document hierarchy; visual variants do not change the
 * rendered semantic element automatically.
 *
 * @example
 * ```tsx
 * <Typography as="h1" variant="display" tone="heading">
 *   Discover your next neighbourhood
 * </Typography>
 * ```
 */
export const Typography = <T extends ElementType = "p">({
  as,
  variant,
  tone,
  align,
  truncate,
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as ?? "p";

  return (
    <Component
      className={cx(
        typographyStyles({ variant, tone, align, truncate }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

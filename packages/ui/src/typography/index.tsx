"use client";

import { type ElementType } from "react";
import { cx } from "../../styled-system/css";
import { typographyStyles } from "./styles";
import { type TypographyProps } from "./types";

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

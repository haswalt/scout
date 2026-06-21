"use client";

import { styled } from "@repo/ui/jsx";

import { type ButtonProps } from "./types";
import { Cog } from "lucide-react";
import { buttonStyles } from "./styles";
import { css } from "../../styled-system/css";

/**
 * Scout's native button primitive.
 *
 * All standard button attributes are forwarded. Set `type` explicitly when the
 * button is rendered inside a form, and use `disabled` for unavailable actions.
 *
 * @example
 * ```tsx
 * <Button type="submit" size="lg">Explore</Button>
 * ```
 */
export const Button = ({
  variant,
  size,
  loading,
  children,
  ...props
}: ButtonProps) => {
  return (
    <styled.button className={buttonStyles({ variant, size })} {...props}>
      {loading ? (
        <Cog size="20" className={css({ animationStyle: "spin" })} />
      ) : (
        children
      )}
    </styled.button>
  );
};

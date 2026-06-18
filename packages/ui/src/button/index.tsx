"use client";

import { styled } from "@repo/ui/jsx";

import { buttonStyles } from "./styles";

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
export const Button = styled("button", buttonStyles);

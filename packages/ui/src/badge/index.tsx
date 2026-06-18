"use client";

import { styled } from "../../styled-system/jsx";
import { badgeStyles } from "./styles";

/**
 * Displays a compact label for status, category, or metadata.
 *
 * The default element is a non-semantic `div`. Add `role="status"` only when
 * updates should be announced to assistive technology.
 *
 * @example
 * ```tsx
 * <Badge tone="success" dot>Available</Badge>
 * ```
 */
export const Badge = styled("div", badgeStyles);

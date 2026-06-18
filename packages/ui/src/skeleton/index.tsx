"use client";

import { styled } from "../../styled-system/jsx";
import { skeletonStyles } from "./styles";

/**
 * Visual placeholder used while content is loading.
 *
 * Use `aria-hidden="true"` for decorative placeholders. If the skeleton
 * represents a loading region, add an accessible status label and hidden text.
 *
 * @example
 * ```tsx
 * <Skeleton shape="text" aria-hidden="true" />
 * ```
 */
export const Skeleton = styled("div", skeletonStyles);

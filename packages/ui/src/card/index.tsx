"use client";

import { withContext, withProvider } from "./styles";

/**
 * Compound card primitives with shared slot styling.
 *
 * `Card.Root` provides recipe context to Media, Header, Body, Footer, and
 * Divider. When using `interactive`, consumers must also provide the correct
 * native element or ARIA semantics and keyboard behavior for the interaction.
 *
 * @example
 * ```tsx
 * <Card.Root padding="md">
 *   <Card.Header>Area overview</Card.Header>
 *   <Card.Body>...</Card.Body>
 * </Card.Root>
 * ```
 */
export const Card = {
  Root: withProvider("div", "root"),
  Media: withContext("img", "media"),
  Header: withContext("div", "header"),
  Body: withContext("div", "body"),
  Footer: withContext("div", "footer"),
  Divider: withContext("hr", "divider"),
};

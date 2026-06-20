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
export const Card = withProvider("div", "root");
export const CardMedia = withContext("div", "media");
export const CardHeader = withContext("div", "header");
export const CardBody = withContext("div", "body");
export const CardFooter = withContext("div", "footer");
export const CardDivider = withContext("div", "divider");

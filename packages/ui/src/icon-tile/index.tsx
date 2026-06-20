"use client";

import { iconTileStyles } from "./styles";
import { type IconTileProps } from "./types";

/**
 * Renders a Lucide icon in a decorative, consistently sized tile.
 *
 * The tile is hidden from assistive technology. Provide equivalent visible
 * text next to it; do not use this component as the only label for an action.
 *
 * @example
 * ```tsx
 * <IconTile size="md">
 *   <Star />
 * </IconTile>
 * ```
 */
export const IconTile = ({ size, children }: IconTileProps) => {
  const styles = iconTileStyles({ size });

  return (
    <div className={styles.root} aria-hidden="true">
      {children}
    </div>
  );
};

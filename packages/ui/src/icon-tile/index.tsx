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
 * <IconTile icon={MapPin} size="md" />
 * ```
 */
export const IconTile = ({ icon: Glyph, size }: IconTileProps) => {
  const styles = iconTileStyles({ size });

  return (
    <div className={styles.root} aria-hidden="true">
      <Glyph className={styles.icon} aria-hidden="true" />
    </div>
  );
};

"use client";

import { iconTileStyles } from "./styles";
import { type IconTileProps } from "./types";

export const IconTile = ({ icon: Glyph, size }: IconTileProps) => {
  const styles = iconTileStyles({ size });

  return (
    <div className={styles.root}>
      <Glyph className={styles.icon} />
    </div>
  );
};

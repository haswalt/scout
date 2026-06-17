"use client";

import { Pin } from "lucide-react";
import { searchStyles } from "./styles";
import { type SearchProps } from "./types";
import { Button } from "../button";
import { styled } from "../../styled-system/jsx";

export const Search = ({ onSubmit, size, valid, ...props }: SearchProps) => {
  const styles = searchStyles({ size });

  return (
    <styled.form className={styles.root} onSubmit={onSubmit}>
      <Pin className={styles.icon} />
      <input type="text" className={styles.input} {...props} />
      <div className={styles.submit}>
        <Button type="submit" size="lg" disabled={!valid}>
          Explore
        </Button>
      </div>
    </styled.form>
  );
};

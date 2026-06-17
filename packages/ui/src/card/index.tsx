"use client";

import { withContext, withProvider } from "./styles";

export const Card = {
  Root: withProvider("div", "root"),
  Media: withContext("img", "media"),
  Header: withContext("div", "header"),
  Body: withContext("div", "body"),
  Footer: withContext("div", "footer"),
  Divider: withContext("hr", "divider"),
};

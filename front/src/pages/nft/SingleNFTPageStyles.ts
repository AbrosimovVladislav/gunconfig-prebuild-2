import { createStyles } from "@mantine/core";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export const useStyles = createStyles((theme) => ({
  grid: {
    padding: [`${theme.spacing.lg}px ${theme.spacing.xl}px`],
  },

  nftImage: {
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    border: "1px solid #f0f1f2",
    overflow: "hidden",
    height: "100%"
  },
}));

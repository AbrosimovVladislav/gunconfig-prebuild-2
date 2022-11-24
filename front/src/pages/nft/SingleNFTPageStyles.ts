import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    padding: [`${theme.spacing.lg}px ${theme.spacing.xl}px`],
  },

  nftImage: {
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    border: "1px solid #dee2e6",
    height: "100%"
  },
}));

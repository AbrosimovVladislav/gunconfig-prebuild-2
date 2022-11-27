import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    padding: [`${theme.spacing.lg}px ${theme.spacing.xl}px`],
    width: "100%"
  },

  nftImage: {
    height: "100%"
  },
  catalogHeader: {
    margin: [`${theme.spacing.xl}px 0`]
  },
}));

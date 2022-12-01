import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  nftContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing.lg,
    margin: [`${theme.spacing.xl}px 0`],
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: "row",
      columnGap: theme.spacing.lg,
    },
  },

  nftImage: {
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  grid: {},

  catalogHeader: {
    margin: [`${theme.spacing.lg}px 0`],
  },
}));

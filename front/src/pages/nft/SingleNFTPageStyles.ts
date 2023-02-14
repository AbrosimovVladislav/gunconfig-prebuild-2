import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  nftContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.other.spacing.lg,
    columnGap: theme.other.spacing.md,
    margin: [`${theme.other.spacing.xl}px 0`],
    [`@media (min-width: ${theme.other.breakpoints.laptopS}px)`]: {
      flexDirection: "row",
    },
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      columnGap: theme.other.spacing.lg,
    },
  },

  nftWrapper: {
    flex: "1 0",
    borderRadius: theme.radius.md,
  },

  nftImage: {
    display: "flex",
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
  },

  header: {
    margin: [`${theme.other.spacing.xl}px 0`],
  },

  carousel: {
    margin: [`${theme.other.spacing.xl}px 0`],
  },

}));

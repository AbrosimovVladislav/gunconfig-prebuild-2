import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  nftContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing.lg,
    columnGap: theme.spacing.md,
    margin: [`${theme.spacing.xl}px 0`],
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: "row",
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      columnGap: theme.spacing.lg,
    },
  },

  nftWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 0",
    position: "relative",
    paddingTop: "100%",
    "&::after": {
      content: "''",
      display: "block",
      width: "100%",
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: "80%",
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: "0",
    },
  },

  nftImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
  },

  grid: {},

  catalogHeader: {
    margin: [`${theme.spacing.lg}px 0`],
  },
}));

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
    [`@media (min-width: ${theme.other.breakpoints.tablet}px)`]: {
      paddingTop: "80%",
    },
    [`@media (min-width: ${theme.other.breakpoints.laptopS}px)`]: {
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

  header: {
    margin: [`${theme.other.spacing.xl}px 0`],
  },

  carousel: {
    margin: [`${theme.other.spacing.xl}px 0`],
  },

}));

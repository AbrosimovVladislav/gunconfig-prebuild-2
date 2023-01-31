import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0",
  },

  collection: {
    display: "flex",
    columnGap: theme.other.spacing.sm,
    margin: [`${theme.other.spacing.xs}px  0 0`],
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      margin: [`${theme.other.spacing.sm}px  0 0`],
    },
  },

  frame: {
    padding: [`${theme.other.spacing.md}px`],
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
    margin: [`${theme.other.spacing.sm}px 0 0`],
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      margin: [`${theme.other.spacing.xl}px 0 0`],
    },
  },

  frameTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.other.spacing.sm,
    padding: [`0 0 ${theme.other.spacing.xs}px`],
    borderBottom: [`1px solid ${theme.colors.neutralLight[1]}`],
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      padding: [`0 0 ${theme.other.spacing.md}px`],
    },
  },

  frameIcon: {
    color: theme.fn.primaryColor(),
  },

  frameText: {
    padding: [`${theme.other.spacing.xs}px  0 0`],
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      padding: [`${theme.other.spacing.md}px  0 0`],
    },
  },

  listItem: {
    padding: [`${theme.other.spacing.xs}px  0 0`],
    "& div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
      padding: [`${theme.other.spacing.md}px  0 0`],
    },
  },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0",
  },

  collection: {
    display: "flex",
    columnGap: theme.spacing.sm,
    margin: [`${theme.spacing.xs}px  0 0`],
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      margin: [`${theme.spacing.sm}px  0 0`],
    },
  },

  frame: {
    padding: [`${theme.spacing.md}px`],
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
    margin: [`${theme.spacing.sm}px 0 0`],
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      margin: [`${theme.spacing.xl}px 0 0`],
    },
  },

  frameTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing.sm,
    padding: [`0 0 ${theme.spacing.xs}px`],
    borderBottom: [`1px solid ${theme.colors.neutralLight[1]}`],
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      padding: [`0 0 ${theme.spacing.md}px`],
    },
  },

  frameIcon: {
    color: theme.fn.primaryColor(),
  },

  frameText: {
    padding: [`${theme.spacing.xs}px  0 0`],
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      padding: [`${theme.spacing.md}px  0 0`],
    },
  },

  listItem: {
    padding: [`${theme.spacing.xs}px  0 0`],
    "& div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      padding: [`${theme.spacing.md}px  0 0`],
    },
  },

  listData: {
    textAlign: "right"
  },
}));

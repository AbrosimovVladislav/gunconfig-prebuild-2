import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  collection: {
    display: "flex",
    columnGap: theme.spacing.xs,
    padding: [`${theme.spacing.xs}px  0 ${theme.spacing.xl}px`],
  },

  frame: {
    padding: [`${theme.spacing.md}px`],
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.md,
    margin: [`0 0 ${theme.spacing.xl}px 0`]
  },

  frameTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing.xs,
    padding: [`0 0 ${theme.spacing.md}px`],
    borderBottom: "1px solid rgba(0, 0, 0, 0.09)",
  },

  frameText: {
    padding: [`${theme.spacing.md}px  0 0`],
  },

  list: {
    padding: [`0 0 0 ${theme.spacing.sm}px`],
  },

  listItem: {
    padding: [`${theme.spacing.md}px  0 0`],
    "& div": {
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-between",
    },
  },
}));

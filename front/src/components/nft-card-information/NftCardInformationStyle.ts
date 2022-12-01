import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
  },

  collection: {
    display: "flex",
    columnGap: theme.spacing.sm,
    margin: [`${theme.spacing.sm}px  0 0`],
  },

  collectionName: {
    color: theme.colors.purple[0],
  },

  frame: {
    padding: [`${theme.spacing.md}px`],
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.md,
    margin: [`${theme.spacing.xl}px 0 0`],
  },

  frameTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing.sm,
    padding: [`0 0 ${theme.spacing.md}px`],
    borderBottom: [`1px solid ${theme.colors.gray}`],
  },

  frameIcon: {
    color: theme.colors.purple[0],
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
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  listData: {
    textAlign: "right",
  },
}));

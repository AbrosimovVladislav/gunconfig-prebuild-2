import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  imageSection: {
    padding: theme.spacing.sm,
  },

  brand: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: theme.fontSizes.md,
    lineHeight: 2,
  },

  brandIcon: {
    margin: [`0 ${theme.spacing.sm}px 0 0`],
  },

  name: {
    padding: [`0 0 ${theme.spacing.sm}px 0`],
    fontSize: theme.fontSizes.md,
  },

  infoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: [
      `${theme.spacing.lg}px ${theme.spacing.sm}px 0 ${theme.spacing.sm}px`,
    ],
  },
}));
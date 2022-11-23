import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    margin: theme.spacing.xs,
    maxWidth: "242px",
    minHeight: "370px",
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
  },

  imageSection: {
    padding: [`0 ${theme.spacing.xs}px 0 ${theme.spacing.xs}px`],
  },

  brand: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: theme.fontSizes.md,
    lineHeight: 2,
  },

  brandIcon: {
    margin: "0 4px 0 0",
    width: "36px",
    height: "36px",
  },

  name: {
    padding: [`0 0 ${theme.spacing.xs}px 0`],
    fontSize: theme.fontSizes.md,
  },

  infoSection: {
    padding: [
      `${theme.spacing.lg}px ${theme.spacing.xs}px 0 ${theme.spacing.xs}px`,
    ],
  },
}));
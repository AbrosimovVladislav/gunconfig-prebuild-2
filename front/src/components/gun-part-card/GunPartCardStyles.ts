import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    boxShadow: theme.shadows.xl,
  },

  imageSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  brand: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  brandIcon: {
    margin: [`0 ${theme.spacing.xs}px 0 0`],
    fill: theme.colors.neutral[2],
  },

  name: {
    padding: [`0 0 ${theme.spacing.sm}px 0`],
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
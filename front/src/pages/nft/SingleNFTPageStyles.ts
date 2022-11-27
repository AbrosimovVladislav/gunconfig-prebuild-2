import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    padding: [`${theme.spacing.lg}px ${theme.spacing.xl}px`],
  },
  catalogHeader: {
    margin: [`${theme.spacing.xl}px 0`]
  },
}));

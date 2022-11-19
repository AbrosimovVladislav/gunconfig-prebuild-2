import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  listSize: {
    margin: [`${theme.spacing.lg}px 0 ${theme.spacing.lg}px`],
  },

  priceText: {
    marginTop: "10px",
  },

  textDescription: {
    marginBottom: "10px",
  },
}));

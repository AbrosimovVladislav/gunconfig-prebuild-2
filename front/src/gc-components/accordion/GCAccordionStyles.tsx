import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  filter: {
    padding: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeight,
  },
  filterItem: {
    border: "none",
  },

  panel: {
    borderTop: "1px solid #BDBDBD",
  },

}));

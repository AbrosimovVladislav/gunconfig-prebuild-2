import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  page: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  card: {
    marginTop: "20px",
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
}));
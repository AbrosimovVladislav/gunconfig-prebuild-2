import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  catalogOfThree: {
    display: "grid",
    gridTemplateColumns: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: "auto auto",
      margin: "0 -10px",
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "auto auto",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: "auto auto auto",
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      gridTemplateColumns: "auto auto auto",
    },
  },

  catalogOfFour: {
    display: "grid",
    gridTemplateColumns: "auto",
    justifyContent: "center",
    alignItems: "flex-start",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: "auto auto",
      margin: "0 -10px",
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "auto auto auto",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: "auto auto auto auto",
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      gridTemplateColumns: "auto auto auto auto",
    },
  },

  card: {
    marginTop: "20px",
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
}));

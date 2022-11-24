import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  listSize: {
    borderTop: "1px solid gray",
    margin: [`${theme.spacing.xs}px 0 0`],
    padding: [`${theme.spacing.md}px`],
    width: "100%",
  },

  gunDes: {
    padding: [`${theme.spacing.xs}px 0 0`],
    borderTop: "1px solid #BDBDBD",
    margin: [`${theme.spacing.sm}px`],
  },

  collectionText: {
    paddong: [`${theme.spacing.xs}px  0 ${theme.spacing.xl}px`],
  },

  descriptionPanel: {
    padding: [`${theme.spacing.md}px`],
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "8px",
    fontWeight: 400,
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeight,
  },

  containerList: {
    display: "flex",
    width: "100%",
    padding: [`${theme.spacing.sm}px 0 0`],

    "& div": {
      flexDirection: "row",
      display: "flex",
      width: "100%",
    },
  },

  listInformation: {
    fontWeight: 700,
    justifyContent: "flex-end",
  },

  informationPanel: {
    margin: [`${theme.spacing.lg}px 0 0`],
  },

  imageBox: {
    display: "flex",
  },

  textPosition: {
    padding: [`0 0${theme.spacing.xs}px`],
  },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  listSize: {
    borderTop: "1px solid gray",
    margin: "10px 0 0 0",
    padding: "17px",
    width: "100%",
  },

  gunDes: {
    padding: "17px 0 0 0",
    borderTop: "1px solid #BDBDBD",
    margin: "10px",
  },

  collectionText: {
    padding: "10px 0 26px",
  },

  descriptionPanel: {
    padding: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "8px",
    fontWeight: 400,
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeight,
  },

  containerList: {
    display: "flex",
    width: "100%",
    padding: "5px 0 0 0",

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
    margin: "26px 0 0 0",
  },

  imageBox: {
    display: "flex",
  },

  textPosition: {
    padding: "0 0 0 10px",
  },
}));

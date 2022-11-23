import { createStyles } from "@mantine/core";
import { RootWrapper } from "../../rendering-engine/components/engine/engine.styles";

export const useStyles = createStyles((theme) => ({
  listSize: {
    // margin: [`${theme.spacing.lg}px 0 ${theme.spacing.lg}px`],
    borderTop: "1px solid #BDBDBD",
    marginTop: "10px",
    padding: "8px",
    paddingTop: "17px",
    width: "100%",
  },

  border: {
    borderTop: "1px solid #BDBDBD",
  },

  gunDes: {
    padding: "8px",
    paddingTop: "17px",
    borderTop: "1px solid #BDBDBD",
    marginTop: "10px",
  },

  collectionText: {
    padding: "10px 0 26px",
  },

  panel: {
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
    paddingBottom: "10px",

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

  panel2: {
    marginTop: "26px",
  },

  imageBox: {
    display: "flex",
  },

  textPosition: {
    paddingLeft: "10px",
  },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  panelSize: {
    borderTop: "1px solid rgba(0, 0, 0, 0.09)",
    margin: [`${theme.spacing.xs}px 0 0`],
    padding: [`${theme.spacing.md}px`],
    width: "100%",
  },

  collectionText: {
    padding: [`${theme.spacing.xs}px  0 ${theme.spacing.xl}px`],

    "& div": {
      display: "flex",
    },
  },

  collectionName: {
    padding: [`0 0 0 ${theme.spacing.sm}px`],
  },

  descriptionPanel: {
    padding: [`${theme.spacing.md}px`],
    boxShadow: theme.shadows.md,
    borderRadius: "8px",
    fontWeight: 400,
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeight,
  },

  informationPanel: {
    margin: [`${theme.spacing.lg}px 0 0`],
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

  imageBox: {
    display: "flex",
  },

  textPosition: {
    padding: [`0 0${theme.spacing.xs}px`],
  },
}));

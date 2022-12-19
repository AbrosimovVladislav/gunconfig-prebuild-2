import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme,_params, getRef) => ({
    root: {
        ref: getRef('root'),
        padding: [`${theme.spacing.xl}px 0 0 0`],
    },

    slide: {
        ref: getRef('slide'),
        margin: [`${theme.spacing.sm}px 0`],
    },

    controls: {
        ref: getRef('controls'),
        left: 0,
        top: 0,
        justifyContent: "end",
        "& button:first-child": {
            margin: [` 0 ${theme.spacing.xl}px 0 0`],
        }
    }
}))
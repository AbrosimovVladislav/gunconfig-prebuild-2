import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme,_params, getRef) => ({
    root: {
        ref: getRef('root'),
        margin: 0,
    },

    slide: {
        ref: getRef('slide'),
    },

    container: {
        ref: getRef('container'),
        margin: [`${theme.spacing.sm}px -23px ${theme.spacing.sm}px 1px`],
    },

    controls: {
        ref: getRef('controls'),
        left: 0,
        top: -50,
        justifyContent: "end",
        "& button:first-child": {
            margin: [` 0 ${theme.spacing.xl}px 0 0`],
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "none"
        },
    }
}))
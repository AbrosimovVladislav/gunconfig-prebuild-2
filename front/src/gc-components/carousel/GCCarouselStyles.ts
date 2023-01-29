import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    root: {
        ref: getRef('root'),
        margin: "0 !important",
        overflow: "visible !important"
    },

    viewport: {
        ref: getRef('viewport'),
        padding: [`${theme.spacing.xl}px 0`],
        margin: [`-${theme.spacing.xl}px 0 0 0`]
    },

    controls: {
        ref: getRef('controls'),
        left: 0,
        top: -50,
        justifyContent: "end",
        "& button:first-child": {
            margin: 0,
        },
        "& button:last-child": {
            marginRight: [`-${theme.spacing.xl}px`],
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "none"
        }
    },

    control: {
        ref: getRef('control'),
        border: "none",
        padding: 0,
        boxShadow: "none",
        background: "transparent",
        "& + &": {
            marginLeft: [`-${theme.spacing.md}px`],
        },
    }
}))
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    root: {
        ref: getRef('root'),
        margin: "0 !important",
        overflow: "visible !important"
    },

    viewport: {
        ref: getRef('viewport'),
        padding: [`${theme.other.spacing.xl}px 0`],
        margin: [`-${theme.other.spacing.xl}px 0 0 0`]
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
            marginRight: [`-${theme.other.spacing.xl}px`],
        },
        [`@media (max-width: ${theme.other.breakpoints.tablet}px)`]: {
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
            marginLeft: [`-${theme.other.spacing.md}px`],
        },
    }
}))
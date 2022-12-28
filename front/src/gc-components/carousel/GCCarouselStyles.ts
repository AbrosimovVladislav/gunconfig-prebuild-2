import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme,_params, getRef) => ({
    root: {
        ref: getRef('root'),
        marginTop: 0,
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
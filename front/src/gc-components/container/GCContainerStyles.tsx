import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        maxWidth: theme.other.breakpoints.laptopXXL,
        padding: [`0 ${theme.other.spacing.sm}px`],
        margin: "0 auto",
    },
    mobileM: {
        maxWidth: theme.other.breakpoints.mobileM
    },
    mobileL: {
        maxWidth: theme.other.breakpoints.mobileL
    },
    tablet: {
        maxWidth: theme.other.breakpoints.tablet
    },
    laptopS: {
        maxWidth: theme.other.breakpoints.laptopS
    },
    laptopM: {
        maxWidth: theme.other.breakpoints.laptopM
    },
    laptopL: {
        maxWidth: theme.other.breakpoints.laptopL
    },
    laptopXL: {
        maxWidth: theme.other.breakpoints.laptopXL
    },
    laptopXXL: {
        maxWidth: theme.other.breakpoints.laptopXXL
    }
}))
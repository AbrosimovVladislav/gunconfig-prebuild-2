import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    filter: {
        margin: [`${theme.other.spacing.sm}px 0`],
        ':last-of-type': {
            marginBottom: 0,
        },
        fontWeight: 400,
    },
}))
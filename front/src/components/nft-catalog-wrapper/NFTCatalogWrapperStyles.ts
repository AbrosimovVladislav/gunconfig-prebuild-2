import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        ref: getRef("card"),
    }
}));
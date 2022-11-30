import { Box, MantineProvider } from "@mantine/core";
import { Engine } from "../rendering-engine/components/engine";

const Configurator = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                <Engine />
            </Box>
        </MantineProvider>
    );
};

export default Configurator;

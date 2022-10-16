import "./App.scss";
import { Box, MantineProvider } from "@mantine/core";
import Engine from "./rendering-engine/engine/engine";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {/* <Kanvas components={components} /> */}

            <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
                <Engine />
            </Box>
        </MantineProvider>
    );
}

export default App;

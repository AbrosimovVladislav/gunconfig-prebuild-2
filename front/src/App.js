import "./App.scss";
import { Box, MantineProvider } from "@mantine/core";
import { Engine } from "./components/rendering-engine/components/engine";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
                <Engine />
            </Box>
        </MantineProvider>
    );
}

export default App;

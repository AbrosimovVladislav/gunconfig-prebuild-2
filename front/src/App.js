import "./App.scss";
import { Box, MantineProvider } from "@mantine/core";
import { Engine } from "./components/rendering-engine/components/engine";
import Options from "./components/rendering-engine/components/options/options";
import { components, componentTypes } from "./components/rendering-engine/data/mockdata";
import { useEffect, useState } from "react";

function App() {
    const mapVisibleData = () => {
        let obj = [];

        componentTypes.forEach((type) => {
            const option = components.find((component) => component.type === type.name && component.visible === true);
            obj = [...obj, option];
        });

        return obj;
    };

    const [visibleData, setVisibleData] = useState(mapVisibleData());

    const dropdownOptions = componentTypes.map((type, idx) => {
        const data = components.filter((component) => component.type === type.name);
        return (
            <Options
                title={type.name}
                components={data}
                key={idx}
                setVisibleData={setVisibleData}
                visibleData={visibleData}
            />
        );
    });

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
                <Engine components={visibleData} />
                <Box sx={{ display: "flex", gap: "5px" }}>{dropdownOptions}</Box>
            </Box>
        </MantineProvider>
    );
}

export default App;

import { Box, MantineProvider } from "@mantine/core";
import { Engine } from "../rendering-engine/components/engine";
import Options from "../rendering-engine/components/options/options";
import { components, componentTypes } from "../rendering-engine/data/mockdata";
import { useState } from "react";

const Configurator = () => {
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
            <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
                <Engine components={visibleData} />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "5px", marginTop: "1rem" }}>
                {dropdownOptions}
            </Box>
        </MantineProvider>
    );
};

export default Configurator;

import { Box, MantineProvider } from "@mantine/core";
import { Engine } from "../components/rendering-engine/components/engine";
import Options from "../components/rendering-engine/components/options/options";
import { components, componentTypes } from "../components/rendering-engine/data/mockdata";
import { useEffect, useState } from "react";

type Props = {};

const Configurator = (props: Props) => {
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
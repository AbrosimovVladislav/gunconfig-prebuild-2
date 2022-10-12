import React, {useEffect, useState} from "react";
import {Stage} from "react-konva";
import CoordinatesInfo from "./CoordinatesInfo";
import GunComponent from "./GunComponent";
import {Select} from "@mantine/core";

export default function Kanvas({components}) {

    const [value, setValue] = useState("AR_15_PISTOL_GRIP");
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        let typeArr = components.filter(c => c.type==="PISTOL_GRIP");

        typeArr.forEach(item => {
            if ( item.name === value ) {
                item.visible = true;
                setValue(item.name)
            } else {
                item.visible = false;
            }
        })

        setRefresh(!refresh);
    },[value])

    return (
        <div>
            <Select
                label="PISTOL_GRIP"
                data={components.filter(c => c.type==="PISTOL_GRIP").map(c => c.name)}
                value={value}
                onChange={setValue}
            />
            <Stage width={window.innerWidth} height={window.innerHeight}>
                {/* {<GunComponent
                    component={components.filter(component => component.target === "ROOT")[0]}
                    components={components}
                />} */}
                {components.map(component =>
                    <GunComponent
                        component={component}
                        components={components}
                    />)}
            </Stage>
        </div>
    )
}

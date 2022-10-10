import React, {useEffect, useState} from "react";
import {Stage} from "react-konva";
import CoordinatesInfo from "./CoordinatesInfo";
import GunComponent from "./GunComponent";
import {Select} from "@mantine/core";

export default function Kanvas({components}) {

    const [value, setValue] = useState("AR_15_PISTOL_GRIP");
    const [selectiveArr, setSelectiveArr] = useState([]);
    const [refresh ,setRefresh] = useState(true);

    useEffect(() => {
        console.log(components)
    }, [components])

    useEffect(() => {
        console.log(value)
        let arr = selectiveArr;
        arr.push({type: "PISTOL_GRIP", value:value})
        setSelectiveArr(arr);

        let typeArr = components.filter(c => c.type==="PISTOL_GRIP");
        // console.log(typeArr)
        console.log(value)
        typeArr.filter(c => c.name===value)[0].visible = true
        setValue(typeArr.filter(c => c.name===value)[0].name)
        typeArr.filter(c => c.name!==value).forEach(c => c.visible=false)
        console.log(typeArr)
        setRefresh(!refresh)
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
                {<GunComponent
                    component={components.filter(component => component.target === "ROOT")[0]}
                    components={components}
                />
                }
                {components.map(component =>
                    <GunComponent
                        component={component}
                        components={components}
                    />)}
            </Stage>
        </div>
    )
}

import React, {useEffect, useState} from "react";
import {Circle, Image, Layer, Rect} from "react-konva";


export default function GunComponent({component, components}) {

    const [currentX, setCurrentX] = useState(component.x);
    const [currentY, setCurrentY] = useState(component.y);

    const [imageObject, setImageObject] = useState(new window.Image());
    const [targetComponent, setTargetComponent] = useState({});

    useEffect(() => {
        const biggestImg = Math.max(...components.map(object => object.width));
        const ratio = (window.innerWidth / biggestImg * 0.7);
        const img = new window.Image();
        img.src = component.image;
        img.height = img.naturalHeight * ratio;
        img.width = img.naturalWidth * ratio;
        setImageObject(img);

        let targetComp = components.filter(comp => comp.name===component.target)[0];
        setTargetComponent(targetComp);
    },[])

    useEffect(() => {
        // console.log(imageObject)
    },[imageObject])

    const handleDragEndFirst = e => {
        const xx = e.target.attrs.x;
        const yy = e.target.attrs.y;
        console.log(component.name + "X:" + xx + " Y:" + yy)
    };

    return (
            <Layer>
                {component.target==="ROOT"
                ? <Image
                        visible={component.visible}
                        x={currentX}
                        y={currentY}
                        image={imageObject}
                        draggable
                        onDragEnd={handleDragEndFirst}
                    />
                : <Image
                        visible={component.visible}
                        x={targetComponent.x - currentX}
                        y={targetComponent.y - currentY}
                        image={imageObject}
                        draggable
                        onDragEnd={handleDragEndFirst}
                    />}

            </Layer>
    )
}

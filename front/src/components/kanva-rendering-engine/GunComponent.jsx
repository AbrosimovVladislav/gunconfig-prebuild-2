import React, { useEffect, useState } from "react";
import { Image, Layer } from "react-konva";

export default function GunComponent({ component, components }) {
    const [imageObject, setImageObject] = useState(new window.Image());
    const [targetComponent, setTargetComponent] = useState({});

    useEffect(() => {
        const biggestImg = Math.max(...components.map((object) => object.width));
        const ratio = (window.innerWidth / biggestImg) * 0.7;
        console.log(ratio);
        const img = new window.Image();
        img.src = component.image;
        img.height = img.naturalHeight * ratio;
        img.width = img.naturalWidth * ratio;
        setImageObject(img);

        let targetComp = components.filter((comp) => comp.name === component.target)[0];
        setTargetComponent(targetComp);
    }, []);

    const handleDragEndFirst = (e) => {
        const xx = e.target.attrs.x;
        const yy = e.target.attrs.y;
        console.log(component.name + "X:" + xx + " Y:" + yy);
    };

    return (
        <Layer>
            <Image
                visible={component.visible}
                x={component.target === "ROOT" ? component.x : targetComponent?.x - component.x}
                y={component.target === "ROOT" ? component.y : targetComponent?.y - component.y}
                image={imageObject}
                draggable
                onDragEnd={handleDragEndFirst}
            />
        </Layer>
    );
}

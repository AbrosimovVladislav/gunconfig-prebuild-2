import React from "react";

export default function CoordinatesInfo({components}) {

    return (
        <div>
            {components.map(component => <p> {component.name} ___ X: {component.x} Y: {component.y}</p>)}
        </div>
    )
}

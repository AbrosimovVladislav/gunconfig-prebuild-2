import React from "react";
import {BuildTree} from "../../schema/BuildTreeSchema";
import {ChildGunComponent} from "./child-gun-component";
import { useStyles } from "./GunComponentStyles";
import { Image } from "@mantine/core";

interface GunComponentProps {
    component: BuildTree;
    ratio: number;
}

const GunComponent = ({component, ratio}: GunComponentProps) => {
    const isRootComponent = component.type === "GUN";
    const {classes} = useStyles();

    return isRootComponent ? (
        <>
            <Image className={classes.root} src={component?.image}/>
            {ratio &&
                component?.children?.map((gunComponent) => (
                    <ChildGunComponent
                        key={gunComponent.id}
                        component={gunComponent}
                        parentId={component.id}
                        ratio={ratio}
                    />
                ))}
        </>
    ) : (
        ratio && component && (
            <ChildGunComponent
                key={component.id}
                component={component}
                parentId={component.id}
                ratio={ratio}
            />
        )
    );
};

export default GunComponent;

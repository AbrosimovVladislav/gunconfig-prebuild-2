import React, { useState } from "react";
import { useGetBuildTreeByBase64Code } from "../../service/configuratorService";
import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

export const Engine = () => {
    const [ratio, setRatio] = useState(0);

    const treeBase64Code =
        "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMywKICAgICAgImNoaWxkcmVuIjogWwogICAgICAgIHsKICAgICAgICAgICJpZCI6IDQsCiAgICAgICAgICAiY2hpbGRyZW4iOiBbXQogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgIHsKICAgICAgImlkIjogNiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDgsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9CiAgXQp9Cg==";

    const [data] = useGetBuildTreeByBase64Code(treeBase64Code);

    return (
        <Canvas>
            <RootWrapper>
                <GunComponent
                    component={data}
                    ratio={ratio}
                    setRatio={setRatio}
                />
            </RootWrapper>
        </Canvas>
    );
};

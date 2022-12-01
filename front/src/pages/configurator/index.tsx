import { useRouter } from "next/router";
import React from "react";

const Configurator2 = () => {
    const router = useRouter();
    const handleClick = (buildCode:string) => {
        router.push(
            "/configurator/" + buildCode
        );
    };

    return (
        <>
        <div onClick={() => handleClick(defaultBuildCode)}>
            <button>AR Default Build</button>
        </div>
            <div onClick={() => handleClick(secondBuildCode)}>
                <button>AR Second Build</button>
            </div>
        </>
    );
};

const defaultBuildCode:string = "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAzLAogICAgICAiY2hpbGRyZW4iOiBbCiAgICAgICAgewogICAgICAgICAgImlkIjogOSwKICAgICAgICAgICJjaGlsZHJlbiI6IFtdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiA2LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTAsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTMsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=";
const secondBuildCode:string = "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAzLAogICAgICAiY2hpbGRyZW4iOiBbCiAgICAgICAgewogICAgICAgICAgImlkIjogNCwKICAgICAgICAgICJjaGlsZHJlbiI6IFtdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiA2LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDgsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxMiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEzLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTQsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=";

export default Configurator2;

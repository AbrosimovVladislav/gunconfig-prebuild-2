import { useRouter } from "next/router";
import React from "react";

const Configurator2 = () => {
    const router = useRouter();
    const handleClick = (buildCode: string) => {
        router.push("/configurator/" + buildCode);
    };

    return (
        <>
            <div onClick={() => handleClick(arBuildCode)}>
                <button>Colt AR-15</button>
            </div>
            <div onClick={() => handleClick(adcAr9BuildCode)}>
                <button>ADC AR-9</button>
            </div>
            <div onClick={() => handleClick(akBuildCode)}>
                <button>AK-103</button>
            </div>
        </>
    );
};

const arBuildCode: string =
    "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAzLAogICAgICAiY2hpbGRyZW4iOiBbCiAgICAgICAgewogICAgICAgICAgImlkIjogOSwKICAgICAgICAgICJjaGlsZHJlbiI6IFtdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiA2LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTAsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTMsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=";
const adcAr9BuildCode: string =
    "ewogICJpZCI6IDkwLAogICJjaGlsZHJlbiI6IFsKICAgIHsKICAgICAgImlkIjogOTEsCiAgICAgICJjaGlsZHJlbiI6IFsKICAgICAgICB7CiAgICAgICAgICAiaWQiOiA0LAogICAgICAgICAgImNoaWxkcmVuIjogW10KICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDk1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTgsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA1MCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE3LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTIsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOjUsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA5MywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDk0LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogOTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiA5NywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=";
const akBuildCode: string =
    "ewogICJpZCI6IDEwMCwKICAiY2hpbGRyZW4iOiBbCiAgICB7CiAgICAgICJpZCI6IDEwMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwMiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwMywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwOCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEwOSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0="
export default Configurator2;

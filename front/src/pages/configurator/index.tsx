import { useRouter } from "next/router";
import React from "react";

const Configurator2 = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push(
            "/configurator/ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAzLAogICAgICAiY2hpbGRyZW4iOiBbCiAgICAgICAgewogICAgICAgICAgImlkIjogOSwKICAgICAgICAgICJjaGlsZHJlbiI6IFtdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgewogICAgICAiaWQiOiA2LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTAsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxMSwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDEyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTMsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNCwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0sCiAgICB7CiAgICAgICJpZCI6IDE1LAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMTYsCiAgICAgICJjaGlsZHJlbiI6IFtdCiAgICB9LAogICAgewogICAgICAiaWQiOiAxNywKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0="
        );
    };

    return (
        <>
        <div onClick={handleClick}>
            <button>AR Default</button>
        </div>
        </>
    );
};

export default Configurator2;

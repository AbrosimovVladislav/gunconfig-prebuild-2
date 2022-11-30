import { useRouter } from "next/router";
import React from "react";

const Configurator2 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push(
            "/configurator/ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMywKICAgICAgImNoaWxkcmVuIjogWwogICAgICAgIHsKICAgICAgICAgICJpZCI6IDQsCiAgICAgICAgICAiY2hpbGRyZW4iOiBbXQogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgIHsKICAgICAgImlkIjogNiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0="
        );
    };

    return (
        <div onClick={handleClick}>
            <button>Click me</button>
        </div>
    );
};

export default Configurator2;

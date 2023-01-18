import { useRouter } from "next/router";
import React from "react";
import { useGetGunsForChoosing } from "../../rendering-engine/service/configuratorService";
import GunPartCard from "../../components/gun-part-card/GunPartCard";
import Catalog from "../../components/catalog/Catalog";

const Configurator2 = () => {

    const { data, isLoading, isError, isSuccess } = useGetGunsForChoosing();

    const router = useRouter();
    const handleClick = (buildCode: string) => {
        router.push("/configurator/" + buildCode);
    };

    return (
        <Catalog>
            {data && data.map(gun =>
                <div onClick={() => handleClick(gun.buildSchemaCode)}>
                    <GunPartCard product={{
                        productId: Math.floor(Math.random()),
                        name: gun.name,
                        productImageUrl: gun.gunImageUrl,
                        description: "desc",
                        brand: "",
                        type: "",
                    }} />
                </div>)}
        </Catalog>
    );
};

export default Configurator2;

import { useRouter } from "next/router";
import React from "react";
import GunPartCard from "../../components/common/gun-part-card/GunPartCard";
import Catalog from "../../components/common/catalog/Catalog";
import { useGetGunsForChoosing } from "../../services/client/configuratorClient";

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
                        productId: gun.gunForChooseId,
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

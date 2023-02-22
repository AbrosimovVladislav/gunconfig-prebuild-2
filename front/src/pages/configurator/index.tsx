import { useRouter } from "next/router";
import React from "react";
import Catalog from "../../components/common/catalog/Catalog";
import { useGetGunsForChoosing } from "../../services/client/configuratorClient";
import GunForConfigurationCard from "../../components/page-gun-choosing/GunForConfigurationCard";
import { useStyles } from "./GunChoosingPageStyles";

const Configurator2 = () => {

    const { data, isLoading, isError, isSuccess } = useGetGunsForChoosing();
    const {classes} = useStyles();

    const router = useRouter();
    const handleClick = (buildCode: string) => {
        router.push("/configurator/" + buildCode);
    };

    return (
        <Catalog layout="catalog122">
            {data && data.map(gun =>
                <div onClick={() => handleClick(gun.buildSchemaCode)} className={classes.card}>
                    <GunForConfigurationCard product={{
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

import {NFTCardDto} from "../../schema/NFTCatalogSchema";
import React from "react";
import {createStyles} from "@mantine/core";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";

const useStyles = createStyles((theme) => ({
    catalog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            margin: "0 -10px",
        },
    },
    card: {
        marginTop: "20px",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: "10px",
            marginRight: "10px"
        }
    }
}))

const Catalog = ({nfts}) => {

    const {classes} = useStyles();

    return <div className={classes.catalog}>
        {nfts.map((item: NFTCardDto) => (
            <div className={classes.card}>
                <NFTMicroCard item={item} key={item.id}/>
            </div>
        ))}
    </div>
}

export default Catalog;
import React from "react";
import {useQuery} from "react-query";
import {getAllNfts} from "../services/nftService";
import {NFTMicroCard} from "../components/nft-micro-card";

const NFTCatalog = () => {

    const {data, error, isLoading, isError} = useQuery("nfts", getAllNfts);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error</div>
    }

    return <div>
        {data.map(nftMicroCardDto =>
            <NFTMicroCard key={nftMicroCardDto.id}
                id={nftMicroCardDto.id}
                productId={nftMicroCardDto.productId}
                productName={nftMicroCardDto.productName}
                nftImageUrl={nftMicroCardDto.nftImageUrl}
                buildDto={nftMicroCardDto.buildDto}/>
            )}
    </div>
};

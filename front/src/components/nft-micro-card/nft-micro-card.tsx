import {NFTCardDto} from "../../schema/NFTCatalogSchema";

const NFTMicroCard = (nftMicroCardData: NFTCardDto) => {

    return <div>
        <span>Id: {nftMicroCardData.id}</span>
        <p>ProductId: {nftMicroCardData.productId}</p>
        <p>ProductName: {nftMicroCardData.productName}</p>
        <img src={nftMicroCardData.nftImageUrl}/>
        <p>{JSON.stringify(nftMicroCardData.buildDto)}</p>
    </div>
}


export default NFTMicroCard;
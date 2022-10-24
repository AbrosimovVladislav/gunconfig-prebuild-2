import { NFTCardDto } from "../../schema/NFTCatalogSchema";

interface Props {
    data: NFTCardDto;
}

const NFTMicroCard = ({ data }: Props) => {
    return (
        <div>
            <span>Id: {data.id}</span>
            <p>ProductId: {data.productId}</p>
            <p>ProductName: {data.productName}</p>
            <img src={data.nftImageUrl} />
            <p>{JSON.stringify(data.buildDto)}</p>
        </div>
    );
};

export default NFTMicroCard;

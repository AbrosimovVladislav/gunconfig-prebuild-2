import { NFTCardDto } from "../../schema/NFTCatalogSchema";

interface Props {
  item: NFTCardDto;
}

const NFTMicroCard = ({ item }: Props) => {
    return (
        <div>
            <span>Id: {item.id}</span>
            <p>ProductId: {item.productId}</p>
            <p>ProductName: {item.productName}</p>
            <img src={item.nftImageUrl} />
            <p>{JSON.stringify(item.buildDto)}</p>
        </div>
    );
};

export default NFTMicroCard;

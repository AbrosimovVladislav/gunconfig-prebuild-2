export const getAllNfts = async () => {
    // const response = await fetch(`${process.env.API_URL}/api/v1/nft-catalog/`);
    const response = await fetch(`http://178.128.203.194:8080/api/v1/nft-catalog/`);
    // const response = await fetch(`http://localhost:8080/api/v1/nft-catalog/`);
    return response.json();
};

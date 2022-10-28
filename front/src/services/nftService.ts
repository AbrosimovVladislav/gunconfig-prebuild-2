export const getAllNfts = async () => {
  const response = await fetch(`http://178.128.203.194:8080/api/v1/nft-catalog/`);
  return response.json();
};

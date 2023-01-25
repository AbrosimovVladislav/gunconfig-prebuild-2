export function getNameForNewNFTByRandom(collectionName: string) {
    return collectionName + " " + Math.floor(Math.random() * 100).toString() + Math.floor(Math.random() * 100).toString();
}

export function getCollectionName(gunName){
  return "GC-Origin";
}

export function getRarity(){
  const rarities = ['USUAL', 'NON-USUAL', 'RARE', 'EPIC', 'OHUEPIC','LEGENDARY'];
  const randomIndex = Math.floor(Math.random() * rarities.length);
  rarities[randomIndex];
  return 'USUAL'
}
export function getCollectionName(gunName){
  // return "GunCraft-Initial";
  return "GC-Initial-Orange";
  // return "GC-Initial-Mirror-Pink";
  // return "GC-Initial-Mirror-Extra-Pink";
  // return "GC-Initial-Metal-01";
}

export function getRarity(){
  const rarities = ['USUAL', 'NON-USUAL', 'RARE', 'EPIC', 'OHUEPIC','LEGENDARY'];
  const randomIndex = Math.floor(Math.random() * rarities.length);
  rarities[randomIndex];
  return 'USUAL'
}
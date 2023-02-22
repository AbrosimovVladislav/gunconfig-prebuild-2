import {GCImage} from "../gc-components";

export default function Home() {
  return (
      <div>
        <div style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          margin: "30px 0 auto"
        }}>
          <GCImage src="https://gunmarket.fra1.digitaloceanspaces.com/NFT_LOGO_REVOLVER.png" alt=""
                   sx={{animation: "mirror 8s infinite linear", maxWidth: "400px"}}/>
            #861m9x6en          <GCImage sx={{maxWidth: "240px"}} src="https://gunmarket.fra1.digitaloceanspaces.com/GunCraft.svg" alt=""/>
          <h2> NFT platform which connects the world of firearms and NFTs together</h2>
        </div>
      </div>
  );
}

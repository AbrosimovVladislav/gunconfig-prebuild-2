import { GCImage } from "../gc-components";

export default function Home() {
    return (
        <div>
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", placeItems: "center", margin: "30px 0 auto"}}>
                <GCImage src="https://gunmarket.fra1.digitaloceanspaces.com/NFT_LOGO_REVOLVER.png" alt="" sx={{
                     animation: "mirror 8s infinite linear", maxWidth: "400px", }}/>
                <h1 style={{margin: "30px 0 auto"}}> Ou...okay, okay, I will work.</h1>
            </div>
        </div>
    );
}

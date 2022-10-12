import './App.scss';
import Kanvas from "./components/Kanvas";
import {MantineProvider} from "@mantine/core";

function App() {

    const components = [
        {
            x:470,
            y:100,
            name: "AR_15_ROOT",
            width:3000,
            image: "https://line-f.ru//i/weapon/ar-15_16_base_DFopAAN.png",
            target: "ROOT",
            type: "GUN",
            visible:true
        },
        {
            x:46,
            y:-137,
            name: "AR_15_PISTOL_GRIP",
            width:500,
            image: "https://line-f.ru//i/part/ar_pistolgrip_iWaahlu.png",
            target: "AR_15_ROOT",
            type: "PISTOL_GRIP",
            visible:true
        },
        {
            x:-342,
            y:-4,
            name: "AR_15_HANDGUARD",
            width:500,
            image: "https://line-f.ru//i/part/ar-15_middle_handguard_zTSZkYv.png",
            target: "AR_15_ROOT",
            type: "HANDGUARD",
            visible:true
        },
        {
            x:-689,
            y:60,
            name: "AR_15_GASBLOCK",
            width:500,
            image: "https://line-f.ru//i/part/ar_gasblock_N516v7K.png",
            target: "AR_15_ROOT",
            type: "GAS_BLOCK",
            visible:true
        },
        {
            x:-982,
            y:-33,
            name: "AR_15_DTK",
            width:500,
            image: "https://line-f.ru///i/part/ar_dtk_1GRVztw.png",
            target: "AR_15_ROOT",
            type: "DTK",
            visible:true
        },
        {
            x:-224,
            y:-175,
            name: "AR_15_MAG",
            width:500,
            image: "https://line-f.ru///i/part/ar_mag_VLMHvIm.png",
            target: "AR_15_ROOT",
            type: "MAG",
            visible:true
        },
        {
            x:-14,
            y:-2,
            name: "AR_15_CHARGING_HANDLE",
            width:500,
            image: "https://line-f.ru//i/part/ar_charginghandle_MwtsIXB.png",
            target: "AR_15_ROOT",
            type: "CHARGING_HANDLE",
            visible:true
        },
        {
            x:-33,
            y:63,
            name: "AR_15_SCOPE",
            width:500,
            image: "https://line-f.ru//i/part/ar_handlecarry_KWf0ags.png",
            target: "AR_15_ROOT",
            type: "SCOPE",
            visible:true
        },
        {
            x:319,
            y:-24,
            name: "AR_15_TUBE",
            width:500,
            image: "https://line-f.ru//i/part/ar_buffertube_XXdqgHx.png",
            target: "AR_15_ROOT",
            type: "TUBE",
            visible:true
        },
        {
            x:307,
            y:-145,
            name: "AR_15_STOCK",
            width:500,
            image: "https://line-f.ru//i/part/ar_stock_rPaB1XY.png",
            target: "AR_15_TUBE",
            type: "STOCK",
            visible:true
        },
        {
            x:38,
            y:-105,
            name: "AR_15_MAGPUL_MOE",
            width:500,
            image: "https://line-f.ru//i/part/1_VjqeULE.png",
            target: "AR_15_ROOT",
            type: "PISTOL_GRIP",
            visible:false
        },
        {
            x:38,
            y:-136,
            name: "AR_15_DGL_GRIP",
            width:500,
            image: "https://line-f.ru//i/part/1_v4Nl9eZ.png",
            target: "AR_15_ROOT",
            type: "PISTOL_GRIP",
            visible:false
        }
    ];

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Kanvas components={components}/>
      </MantineProvider>
  )
}

export default App;

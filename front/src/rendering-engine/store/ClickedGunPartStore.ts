import {ClickedGunPart} from "../../pages/configurator/[base64]";
import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";


interface ClickedGunPartStore {
    clickedGunPart: ClickedGunPart | null;
    setClickedGunPart: (clickedGunPart: ClickedGunPart) => void;
}

export const useClickedGunPartStore = create<ClickedGunPartStore>((set) => ({
    clickedGunPart: null,
    setClickedGunPart: (clickedGunPart: ClickedGunPart) => {
        set((state) => ({clickedGunPart: clickedGunPart}));
    }
}));


mountStoreDevtool("Store", useClickedGunPartStore);
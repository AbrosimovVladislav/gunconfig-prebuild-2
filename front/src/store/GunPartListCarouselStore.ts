import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { BuildTree } from "../schema/configurator/BuildTree";

interface GunPartListCarouselStore {
    gunParts: BuildTree[] | null;
    setGunParts: (gunParts: BuildTree[]) => void;
}

export const useGunPartListCarouselStore = create<GunPartListCarouselStore>((set) => ({
    gunParts: null,
    setGunParts: (gunParts: BuildTree[]) => {
        set((state) => ({ gunParts: gunParts }));
    },
}));


mountStoreDevtool("GunPartListCarouselStore", useGunPartListCarouselStore);

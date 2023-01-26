import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { Product } from "../schema/common/Product";

interface GunPartListCarouselStore {
    gunParts: Product[] | null;
    setGunParts: (gunParts: Product[]) => void;
}

export const useGunPartListCarouselStore = create<GunPartListCarouselStore>((set) => ({
    gunParts: null,
    setGunParts: (gunParts: Product[]) => {
        set((state) => ({ gunParts: gunParts }));
    },
}));


mountStoreDevtool("GunPartListCarouselStore", useGunPartListCarouselStore);

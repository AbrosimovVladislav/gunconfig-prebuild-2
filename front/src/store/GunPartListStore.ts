import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { Product } from "../schema/common/Product";

interface GunPartListStore {
    gunParts: Product[] | null;
    setGunParts: (gunParts: Product[]) => void;
}

export const useGunPartListStore = create<GunPartListStore>((set) => ({
    gunParts: null,
    setGunParts: (gunParts: Product[]) => {
        set((state) => ({ gunParts: gunParts }));
    },
}));


mountStoreDevtool("GunPartListStore", useGunPartListStore);

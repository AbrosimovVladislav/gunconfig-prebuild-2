import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface BuildImageStore {
    buildImage: string | null;
    setBuildImage: (buildImage: string) => void;
}

export const useBuildImageStore = create<BuildImageStore>((set) => ({
    buildImage: null,
    setBuildImage: (buildImage: string) => {
        set((state) => ({
            buildImage: buildImage,
        }));
    },
}));

mountStoreDevtool("BuildImageStore", useBuildImageStore);


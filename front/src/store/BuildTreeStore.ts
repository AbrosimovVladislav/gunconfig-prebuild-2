import { BuildTree } from "../schema/configurator/BuildTree";
import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface BuildTreeStore {
    buildTree: BuildTree | null;
    setBuildTree: (buildTree: BuildTree) => void;
    replaceGunPart: (currentGunPartId: number, newGunPart: BuildTree) => void;
}

export const useBuildTreeStore = create<BuildTreeStore>((set) => ({
    buildTree: null,
    setBuildTree: (buildTree: BuildTree) => {
        set((state) => ({
            buildTree: buildTree,
        }));
    },
    replaceGunPart: (currentGunPartId: number, newGunPart: BuildTree) => {
        set((state) => ({
            buildTree: replaceGunPartRecursively(state.buildTree, currentGunPartId, newGunPart),
        }));
    },
}));

mountStoreDevtool("BuildTreeStore", useBuildTreeStore);

function replaceGunPartRecursively(buildTree: BuildTree, currentGunPartId: number, newGunPart: BuildTree): BuildTree {
    const newTree: BuildTree = searchForPartAndReplaceItToNew(buildTree, currentGunPartId, newGunPart);
    return newTree;
}

const searchForPartAndReplaceItToNew = (buildTree, currentGunPartId, newGunPart) => {
    let newBuildTree = { ...buildTree };

    let newChildren = buildTree.children?.map((child) => {
        let resultChild = child;
        if (child.id === currentGunPartId) {
            resultChild = newGunPart;
            //maybe this solution is not good (bcs we can have more than one kid)
            buildTree.children[0] = resultChild;
        }
        searchForPartAndReplaceItToNew(child, currentGunPartId, newGunPart);
        return resultChild;
    });
    newBuildTree.children = newChildren;
    return newBuildTree;
};

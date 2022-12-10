import {BuildTree} from "../schema/BuildTreeSchema";
import create from "zustand";

interface BuildTreeStore {
    buildTree: BuildTree | null;
    setBuildTree: (buildTree: BuildTree) => void;
    replaceGunPart: (currentGunPartId: number, newGunPart: BuildTree) => void;
}

export const useBuildTreeStore = create<BuildTreeStore>((set) => ({
    buildTree: null,
    setBuildTree: (buildTree: BuildTree) => {
        set((state) => ({buildTree: buildTree}));
    },
    replaceGunPart: (currentGunPartId: number, newGunPart: BuildTree) => {
        set((state) => ({buildTree: replaceGunPartRecursively(state.buildTree, currentGunPartId, newGunPart)}));
    }
}));

function replaceGunPartRecursively(buildTree: BuildTree, currentGunPartId: number, newGunPart: BuildTree): BuildTree {
    const newTree: BuildTree = searchForItem(buildTree, currentGunPartId, newGunPart);
    return newTree;
}

const searchForItem = (buildTree, id, newItem) => {
    let newBuildTree = {...buildTree};

    let newChildren = buildTree.children?.map((el) => {
        let element = el.id === id ? newItem : el;
        searchForItem(el, id, newItem);
        return element;
    });

    newBuildTree.children = newChildren;
    return newBuildTree;
};
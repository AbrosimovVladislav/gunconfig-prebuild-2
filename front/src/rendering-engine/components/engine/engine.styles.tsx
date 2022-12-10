import styled from "@emotion/styled";
import { ENGINE_WIDTH, ROOT_GUN_COMPONENT_WIDTH } from "../../consts";

export const Canvas = styled.div`
    height: 550px;
    width: ${ENGINE_WIDTH}px;
    border: 1px solid black;
    display: grid;
    place-items: center;
`;
export const RootWrapper = styled.div`
    position: relative;
    max-width: ${ROOT_GUN_COMPONENT_WIDTH}px;
    left: 10%;
`;

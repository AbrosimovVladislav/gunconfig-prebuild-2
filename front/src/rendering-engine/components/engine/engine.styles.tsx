import styled from "@emotion/styled";

export const Canvas = styled.div<{ width: number }>`
    height: 550px;
    width: ${(props) => props.width}px;
    border: 1px solid black;
    display: grid;
    place-items: center;
`;
export const RootWrapper = styled.div<{ width: number }>`
    position: relative;
    max-width: ${(props) => props.width}px;
    left: 10%;
`;

import styled from "@emotion/styled";

export const Canvas = styled.div<{ width: number }>`
    height: ${(props) => props.width / 2}px;
    width: ${(props) => props.width}px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: grid;
    place-items: center;
`;
export const RootWrapper = styled.div<{ width: number }>`
    position: relative;
    max-width: ${(props) => props.width}px;
    left: 10%;
`;

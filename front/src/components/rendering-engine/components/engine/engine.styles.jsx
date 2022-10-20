import styled from "@emotion/styled";

export const Canvas = styled.div`
    height: 700px;
    width: 1000px;
    border: 1px solid black;
    display: grid;
    place-items: center;
`;
export const RootWrapper = styled.div`
    position: relative;
    max-width: 60%;
`;

export const Element = styled.img`
    position: ${({ target }) => (target === "ROOT" ? "relative" : "absolute")};
    width: ${({ width }) => width}px;
    left: ${({ x }) => x}px;
    top: ${({ y }) => y}px;
`;

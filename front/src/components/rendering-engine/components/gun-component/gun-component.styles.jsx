import styled from "@emotion/styled";

export const RootComponent = styled.img`
    width: 100%;
`;

export const Component = styled.img`
    position: absolute;
    width: ${({ width }) => width}px;
    left: ${({ x }) => x}px;
    top: ${({ y }) => y}px;
`;

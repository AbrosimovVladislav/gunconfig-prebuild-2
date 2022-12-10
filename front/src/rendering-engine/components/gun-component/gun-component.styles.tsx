import styled from "@emotion/styled";

export const RootComponent = styled.img`
    width: 100%;

    &:hover {
        --webkit-filter: drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red)
            drop-shadow(0 -2px 2px red);
        filter: drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red)
            drop-shadow(0 -2px 2px red);
    }
`;

export const AbsoluteWrapper = styled.div<{ width: number; x: number; y: number }>`
    position: absolute;
    width: ${({ width }) => width}px;
    left: ${({ x }) => x}%;
    top: ${({ y }) => y}%;
    line-height: 0;
`;

export const ImageWrapper = styled.img`
    width: 100%;
`;

export const RelativeChildElementPlaceholder = styled.div`
    position: relative;
    &:hover {
        --webkit-filter: drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red)
            drop-shadow(0 -2px 2px red);
        filter: drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red)
            drop-shadow(0 -2px 2px red);
    }
`;

export const RedDot = styled.div`
    position: absolute;
    background-color: red;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    opacity: 0;
`;

import styled from "@emotion/styled";

export const Canvas = styled.div`
    height: 600px;
    width: 1000px;
    border: 1px solid black;
    display: grid;
    place-items: center;
`;
export const RootWrapper = styled.div`
    position: ${({ data }) => (data ? "relative" : "relative")};
    max-width: 60%;
    left: 10%;
`;

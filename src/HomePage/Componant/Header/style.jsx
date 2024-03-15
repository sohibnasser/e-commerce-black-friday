import styled from "@emotion/styled";

export const HeaderWrapper = styled("section")`

    height: 38rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (min-width:991px) and (max-width:1040px) {
        height: 40rem;
    }

    @media screen and (min-width:769px) and (max-width:990px) {
        height: 40rem;
    }
   
    @media screen and (min-width:427px) and (max-width:768px) {
            height: 43rem;
        
    }
   
    @media screen and (min-width:321px) and (max-width:426px) {
            height: 40rem;
    }
   
    @media screen and (max-width:320px) {
        height: 40rem;
    }   

`;



export const Video = styled("video")`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow-clip-margin: content-box;
    overflow: clip;
`;




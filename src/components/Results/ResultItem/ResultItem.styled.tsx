import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: block;
  margin: .5rem;
  width: 20%;

  @media (max-width: 499px) {
    width: 80%;
  }

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 33.333%;
  }

  @media (min-width: 1025px) {
    width: 25%;
  }
`;
export const StyledResultImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform .3s;
`;
export const StyledShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;
  box-shadow: inset 0 -180px 55px -12px rgba(0, 0, 0, 0.77);
`;
export const StyledContainerTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 4vw;
  color: white;
  width: 100%;
  height: 25%;
  left: 0;
  bottom: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) and (max-width: 1024px) {
    font-size: 2.5vw;
  }
  
  @media (min-width: 1025px) and (max-width: 1999px) {
    font-size: 1.5vw;
  }
  
  @media (min-width: 2000px) {
    font-size: 1vw;
  }
`;
export const StyledTitle = styled.span`
  font-weight: 800;
  padding-bottom: 5px;
`;
export const StyledTitleYear = styled.span`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
`;

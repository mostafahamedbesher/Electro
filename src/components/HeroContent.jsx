import styled from "styled-components";
import HeroTextBox from "./HeroTextBox";
import HeroImgBox from "./HeroImgBox";

const StyledHeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

function HeroContent() {
  return (
    <StyledHeroContent>
      <HeroTextBox />
      <HeroImgBox />
    </StyledHeroContent>
  );
}

export default HeroContent;

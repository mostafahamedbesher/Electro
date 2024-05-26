import styled from "styled-components";
import HeroHeader from "./HeroHeader";
import HeroContent from "./HeroContent";

const StyledHeroContentBox = styled.div`
  padding: 1.6rem 0;
`;

function HeroContentBox() {
  return (
    <StyledHeroContentBox>
      <HeroHeader />
      <HeroContent />
    </StyledHeroContentBox>
  );
}

export default HeroContentBox;

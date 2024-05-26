import styled from "styled-components";

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function HeroImgBox() {
  return (
    <div>
      <HeroImage src="./images/hero-img.png" alt="hero section image" />
    </div>
  );
}

export default HeroImgBox;

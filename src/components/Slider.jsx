import styled from "styled-components";
import SliderDot from "./SliderDot";
import { useState } from "react";

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: ${(props) => props.horizontalAlign};
`;

function Slider({ dotsNum, horizontalAlign = "flex-start" }) {
  const [curClicked, setCurClicked] = useState(0);

  return (
    <StyledSlider horizontalAlign={horizontalAlign}>
      {Array.from({ length: dotsNum }).map((dot, i) => (
        <SliderDot
          curClicked={curClicked}
          setCurClicked={setCurClicked}
          key={i}
          index={i}
        />
      ))}
    </StyledSlider>
  );
}

export default Slider;

import styled from "styled-components";

const StyledSliderDot = styled.div`
  width: ${(props) => (props.clicked ? "2.4rem" : "0.8rem")};
  height: 0.8rem;
  border-radius: ${(props) => (props.clicked ? "4px" : "50%")};
  background-color: ${(props) =>
    props.clicked ? "var(--color-yellow)" : "var(--color-zinc-300)"};
  cursor: pointer;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    width: ${(props) => (props.clicked ? "3rem" : "1rem")};
  }
`;

function SliderDot({ curClicked, setCurClicked, index }) {
  function handleClick() {
    setCurClicked(index);
  }

  return (
    <StyledSliderDot onClick={handleClick} clicked={curClicked === index} />
  );
}

export default SliderDot;

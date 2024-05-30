import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  /* overflow: hidden; */

  ${(props) =>
    !props.isOpenMenu &&
    `opacity: 0;
  pointer-events: none;
  visibility: hidden;`}
`;

function Overlay({ isOpenMenu, closeMenu }) {
  function handleClick(e) {
    const menu = document.querySelector("ul");
    if (e.target !== menu) {
      closeMenu();
    }
  }

  return (
    <StyledOverlay isOpenMenu={isOpenMenu} onClick={(e) => handleClick(e)} />
  );
}

export default Overlay;

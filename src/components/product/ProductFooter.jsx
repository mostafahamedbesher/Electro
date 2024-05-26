import styled from "styled-components";

const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-top: 1px solid var(--color-grey-light);
  margin-top: 1rem;

  /* display: ${(props) => (props.isHovered ? "flex" : "none")}; */

  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  visibility: ${(props) => (props.isHovered ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isHovered ? "all" : "none")};
  transition: all 0.2s;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    font-size: 1.3rem;
    font-weight: 300;
    padding-top: 1rem;
    color: var(--color-zinc-500);
  }
`;

export default ProductFooter;

import styled, { css } from "styled-components";

const position = {
  right: css`
    right: 1rem;
  `,
  left: css`
    left: 1rem;
  `,
};

const ProductSwitchIcon = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  ${(props) => position[props.direction]}
  transform: translate(0, -50%);
  width: 2rem;
  height: 2rem;
  color: var(--color-grey-dark);
  font-weight: 700;

  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  visibility: ${(props) => (props.isHovered ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isHovered ? "all" : "none")};
  transition: all 0.2s;
`;

export default ProductSwitchIcon;

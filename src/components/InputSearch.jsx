import styled from "styled-components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const StyledInput = styled.input`
  border-radius: 50rem;
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  width: 100%;
  border: 2px solid var(--color-yellow);
  /* flex-grow: 1; */

  &:focus {
    outline: 2px solid var(--color-yellow);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    border-radius: 0;
    padding: 2rem 3.2rem;
    font-size: 1.8rem;
    border: none;
  }
`;

const InputIconBox = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border: none;

  background-color: var(--color-yellow);
  /* padding: 1.4rem 2.8rem; */
  padding: 1.6rem 3.2rem;
  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-dark);

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      width: 3rem;
      height: 3rem;
    }
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    background-color: transparent;
  }
`;

const StyledInputSearch = styled.div`
  position: relative;
  flex-grow: 1;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.1);

    display: ${(props) => !props.isOpenSearch && "none"};
  }
`;

function InputSearch({ isOpenSearch }) {
  return (
    <StyledInputSearch isOpenSearch={isOpenSearch}>
      <StyledInput type="text" placeholder="Search for products" />
      <InputIconBox>
        <HiOutlineMagnifyingGlass />
      </InputIconBox>
    </StyledInputSearch>
  );
}

export default InputSearch;

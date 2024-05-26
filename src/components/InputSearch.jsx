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
`;

const InputIconBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

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
  }
`;

const InputBox = styled.div`
  position: relative;
  flex-grow: 1;
`;

function InputSearch() {
  return (
    <InputBox>
      <StyledInput type="text" placeholder="Search for products" />
      <InputIconBox>
        <HiOutlineMagnifyingGlass />
      </InputIconBox>
    </InputBox>
  );
}

export default InputSearch;

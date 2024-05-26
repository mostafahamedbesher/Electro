import styled from "styled-components";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const StyledSignup = styled.div`
  height: 8rem;
  margin-top: 7rem;
  padding: 0 var(--padding-section);
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & svg {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--color-grey-dark);
  }

  & p {
    font-size: 2.2rem;
    font-weight: 400;
  }
`;

const Input = styled.input`
  border-radius: 50rem;
  padding: 1.4rem 2.8rem;
  font-size: 1.5rem;
  width: 40rem;

  /* border: 2px solid var(--color-yellow); */
  border: none;

  &:focus {
    outline: 2px solid var(--color-yellow);
  }
`;

const InputLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: var(--color-grey-dark);
  padding: 1.4rem 2.8rem;
  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    color: var(--color-white);
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const InputBox = styled.div`
  position: relative;
`;

function Signup() {
  return (
    <StyledSignup>
      <Box>
        <HiOutlinePaperAirplane />
        <p>Sign Up to Newsletter</p>
      </Box>
      <span>
        ...and recieve <strong>$20 coupon for first shopping</strong>
      </span>
      <InputBox>
        <Input type="text" placeholder="Enter your email address" />
        <InputLabel>
          <span>Sign up</span>
        </InputLabel>
      </InputBox>
    </StyledSignup>
  );
}

export default Signup;

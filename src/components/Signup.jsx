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

    /* BELOW 960 PIXELS (Tablets) */
    @media (max-width: 60em) {
      font-size: 1.4rem;
    }

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 1.8rem;
    }
  }

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 0 var(--padding-section-sm);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    flex-wrap: wrap;
    height: 14rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    justify-content: center;
    height: 15rem;
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

    /* BELOW 960 PIXELS (Tablets) */
    @media (max-width: 60em) {
      font-size: 1.7rem;
    }

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2.2rem;
    }
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

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    width: 38rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    width: 69rem;
    font-size: 1.6rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    width: 40rem;
  }
`;

const InputLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* height: 100%; */
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

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 1.6rem;
    }
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    padding: 1.4rem 2.4rem;
  }
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

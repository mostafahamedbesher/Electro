import styled from "styled-components";
import Logo from "./Logo";
import { FaHeadset } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FooterList from "./FooterList";

const StyledFooter = styled.footer`
  /* margin-top: 5rem; */
`;

const FooterContainer = styled.div`
  padding: 0 var(--padding-section);
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  align-items: center;
  justify-items: start;
  padding-bottom: 5rem;

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 0 var(--padding-section-sm);
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 6rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    align-items: start;
    column-gap: 12rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    column-gap: 8rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    column-gap: 5rem;
    padding: 0 2rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 2.4rem;
  margin-bottom: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const GridThirdColumn = styled.div`
  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`;

const GridSecondColumn = styled.div`
  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;

const TxtBox = styled.div`
  & p {
    font-size: 2rem;
    color: var(--color-grey-dark);
    font-weight: 500;

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 1.8rem;
    }
  }

  & span {
    font-size: 1.4rem;
    color: var(--color-grey-medium);
    font-weight: 300;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--color-grey-dark);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 1.8rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 1.6rem;
  }
`;

const IconBox = styled.div`
  & svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    cursor: pointer;
  }
`;

const FooterEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--padding-section);
  background-color: var(--color-zinc-100);
  margin-top: 4rem;

  & p {
    font-size: 1.5rem;
    font-weight: 400;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2rem;
    }
  }

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 1rem var(--padding-section-sm);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Column>
          <Logo size="4.6rem" />

          <Box>
            <IconBox width="4rem" height="4rem" color="var(--color-yellow)">
              <FaHeadset />
            </IconBox>

            <TxtBox>
              <span>Got Questions ? Call us 24/7!</span>
              <p>(800) 8001-8588, (0600) 874 548</p>
            </TxtBox>
          </Box>

          <div>
            <Text>
              <strong>Contact Info</strong>
            </Text>
            <Text>17 Princess Road, London, Greater London NW1 8JR, UK</Text>
          </div>

          <Box>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaFacebook />
            </IconBox>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaWifi />
            </IconBox>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaTwitter />
            </IconBox>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaGooglePlusG />
            </IconBox>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaBasketballBall />
            </IconBox>
            <IconBox
              width="2.2rem"
              height="2.2rem"
              color="var(--color-zinc-400)"
            >
              <FaLinkedinIn />
            </IconBox>
          </Box>
        </Column>

        <GridSecondColumn>
          <Column>
            <Text>
              <strong>Find it Fast</strong>
            </Text>

            <FooterList
              items={[
                "Laptops & Computers",
                "Smart Phones & Tablets",
                "Cameras & Photography",
                "Video Games & Consoles",
                "TV & Audio",
                "Gadgets",
                "Waterproof Headphones",
                "Car Electronic & GPS",
                "Printers & Ink",
                "Software",
                "Office Supplies",
                "Computer Components",
                "Accessories",
              ]}
            />
          </Column>
        </GridSecondColumn>

        <GridThirdColumn>
          <Column>
            <Text>
              <strong>Customer Care</strong>
            </Text>

            <FooterList
              gridColumns="1"
              items={[
                "My Account",
                "Order Tracking",
                "Wish List",
                "Customer Service",
                "Returns/Exchange",
                "FAQs",
                "Product Support",
              ]}
            />
          </Column>
        </GridThirdColumn>
      </FooterContainer>

      <FooterEnd>
        <p>
          &copy; <strong>Electro</strong> - All Rights Reserved
        </p>

        <img src="./images/footer.png" alt="supported payments" />
      </FooterEnd>
    </StyledFooter>
  );
}

export default Footer;

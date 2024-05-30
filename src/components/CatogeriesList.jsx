import styled from "styled-components";
import CategoeryItem from "./CategoeryItem";
import CatogeriesItemLink from "./CatogeriesItemLink";

const StyledCatogeriesList = styled.ul`
  padding: 1rem 1.6rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    overflow: scroll;
  }
`;

function CatogeriesList() {
  return (
    <StyledCatogeriesList>
      <CatogeriesItemLink>Value of The Day</CatogeriesItemLink>
      <CatogeriesItemLink>Top 100 Offers</CatogeriesItemLink>
      <CatogeriesItemLink>New Arrivals</CatogeriesItemLink>

      <CategoeryItem itemName="Laptops & Computer" />
      <CategoeryItem itemName="Camers & Photography" />
      <CategoeryItem itemName="Smart Phones & Tablets" />
      <CategoeryItem itemName="Video Games & Consoles" />
      <CategoeryItem itemName="TV & Audio" />
      <CategoeryItem itemName="Gadgets" />
      <CategoeryItem itemName="Car Electronic & GPS" />
      <CategoeryItem itemName="Accessories" />
    </StyledCatogeriesList>
  );
}

export default CatogeriesList;

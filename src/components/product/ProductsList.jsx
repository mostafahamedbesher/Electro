import styled from "styled-components";
import ProductsItem from "./ProductsItem";

const ProductsData = [
  {
    category: "Speakers",
    name: "Wireless Audio System Multiroom 360",
    img: "category-1.png",
    price: "$685.00",
  },
  {
    category: "Laptops",
    name: "Tablet White EliteBook Revolve 810 G2",
    img: "category-2.png",
    price: "$2299.00",
  },
  {
    category: "HeadPhones",
    name: "Purple Solo 2 Wireless",
    img: "category-3.png",
    price: "$448.00",
  },
  {
    category: "SmartPhones",
    name: "Smartphone 6s 32GB LTE",
    img: "category-4.png",
    price: "$1215.00",
  },
  {
    category: "Camers",
    name: "Widescreen NX Mini f1 SMART NX",
    img: "category-5.png",
    price: "$559.00",
  },
  {
    category: "Printers",
    name: "Full Color Laserjet Pro M452dn",
    img: "category-6.png",
    price: "$1050.00",
  },
];

const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-template-columns: 1fr 1fr;
  }
`;

function ProductsList() {
  return (
    <>
      <StyledProductsList>
        {ProductsData.map((product, i) => (
          <ProductsItem
            product={product}
            key={product.name}
            offerPrice={i === 1 ? "$1999.00" : ""}
          />
        ))}
      </StyledProductsList>
    </>
  );
}

export default ProductsList;

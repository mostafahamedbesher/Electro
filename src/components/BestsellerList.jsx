import styled from "styled-components";
import BestsellerProduct from "./BestsellerProduct";

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
    img: "bestseller-2.png",
    price: "$2299.00",
  },
  {
    category: "HeadPhones",
    name: "White Solo 2 Wireless",
    img: "bestseller-3.png",
    price: "$248.00",
  },
  {
    category: "SmartPhones",
    name: "Smartphone 6s 32GB LTE",
    img: "category-4.png",
    price: "$1215.00",
  },
  {
    category: "Camers",
    name: "Camera C430W 4k Waterproof",
    img: "bestseller-5.png",
    price: "$559.00",
  },
  {
    category: "Wearables",
    name: "Gear Vitual Reality",
    img: "bestseller-6.png",
    price: "$799.00",
  },
];

const StyledBestsellerList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  column-gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  row-gap: 4rem;
`;

function BestsellerList() {
  return (
    <StyledBestsellerList>
      {ProductsData.map((product, i) => (
        <BestsellerProduct
          product={product}
          key={product.name}
          offerPrice={i === 3 ? "1999.00" : ""}
        />
      ))}
    </StyledBestsellerList>
  );
}

export default BestsellerList;

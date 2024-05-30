import styled from "styled-components";
import Filter from "./Filter";
import ProductsItem from "./product/ProductsItem";
import Slider from "./Slider";

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
    img: "allproducts-2.png",
    price: "$1999.00",
  },
  {
    category: "TVs",
    name: "Widescreen 4K SUHD TV",
    img: "allproducts-3.png",
    price: "$3299.00",
  },
  {
    category: "SmartPhones",
    name: "Smartphone 6s 32GB LTE",
    img: "allproducts-4.png",
    price: "$1215.00",
  },
  {
    category: "Camers",
    name: "Camera C430W 4K with Waterproof cover",
    img: "allproducts-5.png",
    price: "$782.00",
  },
];

const StyledAllProductsContainer = styled.main`
  margin: 0 var(--padding-section);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* align-items: start; */
  column-gap: 1rem;
  row-gap: 1rem;
  border-radius: 5px;
  padding-bottom: 4rem;

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    margin: 0 5rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1rem;
  height: 100%;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const FilterBox = styled.div`
  padding: 0 var(--padding-section);
  margin-bottom: 3rem;

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 0 var(--padding-section-sm);
  }
`;

function AllProductsContainer() {
  return (
    <>
      <FilterBox>
        <Filter
          filterLabels={[
            "Best Deals",
            "TV & Video",
            "Camers",
            "Audio",
            "Cell Phones",
            "GPS & Navi",
            "Computers",
            "Portable Audio",
            "Accessories",
          ]}
          horizantalAlign="space-between"
        />
      </FilterBox>

      <StyledAllProductsContainer>
        <Column>
          {ProductsData.filter((product, i) => i < 2).map((product) => (
            <ProductsItem key={product.name} product={product} />
          ))}
        </Column>

        <ProductsItem
          product={ProductsData[2]}
          hasIconTxt={true}
          offerPrice="$2999.00"
        />

        <Column>
          {ProductsData.filter((product, i) => i > 2).map((product) => (
            <ProductsItem key={product.name} product={product} />
          ))}
        </Column>
      </StyledAllProductsContainer>

      <Slider dotsNum={4} horizontalAlign="center" />
    </>
  );
}

export default AllProductsContainer;

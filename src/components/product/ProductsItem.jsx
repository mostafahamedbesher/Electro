import styled from "styled-components";
import { useState } from "react";

import { BiCartAdd } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";
import { HiMiniChevronLeft } from "react-icons/hi2";

import ProductCateogeryText from "./ProductCateogeryText";
import ProductName from "./ProductName";
import ProductPriceContainer from "./ProductPriceContainer";
import ProductPriceBox from "./ProductPriceBox";
import ProductPriceEl from "./ProductPriceEl";
import ProductOfferPriceEl from "./ProductOfferPriceEl";
import ProductIcon from "./ProductIcon";
import ProductFooter from "./ProductFooter";
import ProductSwitchIcon from "./ProductSwitchIcon";

const StyledProductsItem = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: var(--color-white);

  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-grey-light-1);
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Img = styled.img`
  display: block;
  width: 80%;
  align-self: center;
`;

function ProductsItem({ product, hasIconTxt = false, offerPrice = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseHover() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  if (!product) return;

  const { category, name, img, price } = product;

  return (
    <StyledProductsItem
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseLeave}
    >
      <div>
        <ProductCateogeryText>{category}</ProductCateogeryText>
        <ProductName>{name}</ProductName>
      </div>

      <Img src={`./images/${img}`} />

      <div>
        <ProductPriceContainer>
          <ProductPriceBox>
            {offerPrice && (
              <ProductOfferPriceEl>{offerPrice}</ProductOfferPriceEl>
            )}
            <ProductPriceEl offerPrice={offerPrice}>{price}</ProductPriceEl>
          </ProductPriceBox>

          <ProductIcon
            isHovered={isHovered}
            hasIconTxt={hasIconTxt}
            product={product}
            offerPrice={offerPrice}
          >
            <BiCartAdd />
            {hasIconTxt && <span>Add to Cart</span>}
          </ProductIcon>
        </ProductPriceContainer>

        <ProductFooter isHovered={isHovered}>
          <div>
            <HiOutlineArrowPathRoundedSquare />
            <span>compare</span>
          </div>
          <div>
            <HiOutlineHeart />
            <span>Wishlist</span>
          </div>
        </ProductFooter>
      </div>

      <ProductSwitchIcon direction="right" isHovered={isHovered}>
        <HiMiniChevronRight />
      </ProductSwitchIcon>

      <ProductSwitchIcon direction="left" isHovered={isHovered}>
        <HiMiniChevronLeft />
      </ProductSwitchIcon>
    </StyledProductsItem>
  );
}

export default ProductsItem;

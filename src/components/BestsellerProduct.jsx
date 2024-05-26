import { useState } from "react";
import styled from "styled-components";
import ProductCateogeryText from "./product/ProductCateogeryText";
import ProductName from "./product/ProductName";
import ProductPriceContainer from "./product/ProductPriceContainer";
import ProductPriceBox from "./product/ProductPriceBox";
import ProductPriceEl from "./product/ProductPriceEl";
import ProductOfferPriceEl from "./product/ProductOfferPriceEl";
import ProductIcon from "./product/ProductIcon";
import ProductFooter from "./product/ProductFooter";
import { BiCartAdd } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";
import { HiMiniChevronLeft } from "react-icons/hi2";

const StyledBestsellerProduct = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  align-items: center;
  justify-items: center;
  column-gap: 1rem;
  padding: 1rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    outline: 1px solid var(--color-grey-light-1);
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Img = styled.img`
  width: 75%;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 2rem;
    width: 2rem;
    color: var(--color-grey-dark);
  }
`;

function BestsellerProduct({ product, offerPrice = "" }) {
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
    <StyledBestsellerProduct
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseLeave}
    >
      <ImgBox>
        {isHovered && <HiMiniChevronLeft />}

        <Img src={`./images/${img}`} />

        {isHovered && <HiMiniChevronRight />}
      </ImgBox>

      <div>
        <div>
          <ProductCateogeryText>{category}</ProductCateogeryText>
          <ProductName>{name}</ProductName>
        </div>

        <div>
          <ProductPriceContainer>
            <ProductPriceBox>
              {offerPrice && <ProductOfferPriceEl>$999.00</ProductOfferPriceEl>}
              <ProductPriceEl offerPrice={offerPrice}>{price}</ProductPriceEl>
            </ProductPriceBox>
            <ProductIcon
              isHovered={isHovered}
              product={product}
              offerPrice={offerPrice}
            >
              <BiCartAdd />
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
      </div>
    </StyledBestsellerProduct>
  );
}

export default BestsellerProduct;

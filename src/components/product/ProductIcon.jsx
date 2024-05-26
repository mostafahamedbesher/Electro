import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";

const StyledProductIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${(props) => (props.hasIconTxt ? "50px" : "50%")};
  padding: 0.8rem;
  background-color: ${(props) =>
    props.hasIconTxt
      ? "var(--color-yellow)"
      : (props) =>
          props.isHovered ? "var(--color-yellow)" : "var(--color-zinc-300)"};
  gap: 0.5rem;

  & span {
    color: var(--color-white);
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

function ProductIcon({ children, hasIconTxt, isHovered, product, offerPrice }) {
  const { dispatch } = useCart();

  function handleAddtoCart() {
    if (!product) return;

    const { img, name, price } = product;

    const cartProduct = {
      img,
      name,
      price: offerPrice ? offerPrice : price,
    };

    dispatch({ type: "cart/add", payload: cartProduct });

    toast.success("Product Added Successfullt to Cart");
  }

  return (
    <StyledProductIcon
      hasIconTxt={hasIconTxt}
      isHovered={isHovered}
      onClick={handleAddtoCart}
    >
      {children}
    </StyledProductIcon>
  );
}

export default ProductIcon;

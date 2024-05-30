import { Toaster } from "react-hot-toast";
import AllProducts from "./components/AllProducts";
import Bestseller from "./components/Bestseller";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import OffersItem from "./components/OffersItem";
import OffersList from "./components/OffersList";
import Products from "./components/product/Products";
import RecentlyViewed from "./components/RecentlyViewed";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import { useState } from "react";
import Overlay from "./components/Overlay";

const StyledApp = styled.div`
  font-size: 24px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.1);
`;

function App() {
  // state for opening mobile menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function openMenu() {
    setIsOpenMenu(true);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Overlay isOpenMenu={isOpenMenu} closeMenu={closeMenu} />

        <Info />
        <Header openMenu={openMenu} />
        <Hero isOpenMenu={isOpenMenu} />

        <OffersList>
          <OffersItem
            imgNum={1}
            textElement={
              <p>
                Catch Big <span>Deals</span> On The Camers
              </p>
            }
          />
          <OffersItem
            imgNum={2}
            textElement={
              <p>
                Tablets, SmartPhones <span>And More</span>
              </p>
            }
          />
          <OffersItem
            imgNum={3}
            textElement={
              <p>
                Shop the <span>hottest</span> products
              </p>
            }
          />
        </OffersList>

        <Products />

        <AllProducts />

        <Bestseller />

        <RecentlyViewed />

        <Footer />
      </StyledApp>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "13px",
            maxWidth: "500",
            padding: "16px 24px",
            backgroundColor: "var(--color-zinc-100)",
            color: "var(--color-grey-500)",
          },
        }}
      />
    </>
  );
}

export default App;

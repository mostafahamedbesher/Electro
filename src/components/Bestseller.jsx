import styled from "styled-components";
import BestsellerList from "./BestsellerList";
import SectionHeader from "./SectionHeader";
import Slider from "./Slider";
import Filter from "./Filter";

const StyledBestseller = styled.section`
  padding: 5rem 0;
`;

const BestsellerContainer = styled.div`
  padding: 0 var(--padding-section);

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 0 var(--padding-section-sm);
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    padding: 0 2rem;
  }
`;

const BannerBox = styled.div`
  margin: 5rem 0;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 20rem;

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    display: none;
  }
`;

function Bestseller() {
  return (
    <StyledBestseller>
      <BestsellerContainer>
        <SectionHeader headingTxt="Best Sellers">
          <Filter
            filterLabels={[
              "Open 20",
              "Phones & Tablets",
              "Laptops & Computers",
              "Video Camers",
            ]}
            hasBorder={false}
            borderType="round"
            horizantalAlign="start"
          />
        </SectionHeader>

        <BestsellerList />

        <Slider dotsNum={4} horizontalAlign="center" />

        <BannerBox>
          <BannerImg
            src="./images/bestseller-banner.png"
            alt="bestsellers banner"
          />
        </BannerBox>
      </BestsellerContainer>
    </StyledBestseller>
  );
}

export default Bestseller;

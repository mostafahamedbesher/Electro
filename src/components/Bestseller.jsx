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
`;

const BannerBox = styled.div`
  margin: 5rem 0;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 20rem;
`;

function Bestseller() {
  return (
    <StyledBestseller>
      <BestsellerContainer>
        <SectionHeader headingTxt="BestSellers">
          <Filter
            filterLabels={[
              "Open 20",
              "Phones & Tablets",
              "Laptops & Computers",
              "Video Camers",
            ]}
            hasBorder={false}
            borderType="round"
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

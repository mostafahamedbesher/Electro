import styled from "styled-components";

import Slider from "./Slider";
import SectionHeader from "./SectionHeader";
import { HiMiniChevronRight } from "react-icons/hi2";
import { HiMiniChevronLeft } from "react-icons/hi2";
import RecentlyViewsList from "./RecentlyViewsList";
import Signup from "./Signup";

const StyledRecentlyViewed = styled.section`
  padding-bottom: 5rem;
`;

const RecentlyViewedContainer = styled.div`
  padding: 0 var(--padding-section);
`;

const IconsBox = styled.div`
  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-dark);
  }
`;

function RecentlyViewed() {
  return (
    <StyledRecentlyViewed>
      <RecentlyViewedContainer>
        <SectionHeader headingTxt="RecentlyViewed">
          <IconsBox>
            <HiMiniChevronLeft />
            <HiMiniChevronRight />
          </IconsBox>
        </SectionHeader>

        <RecentlyViewsList />
        <Slider dotsNum={4} horizontalAlign="center" />
      </RecentlyViewedContainer>

      <Signup />
    </StyledRecentlyViewed>
  );
}

export default RecentlyViewed;

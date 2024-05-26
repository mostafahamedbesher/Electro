import styled from "styled-components";
import Infoitem from "./Infoitem";
import { HiPhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineTruck } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgDollar } from "react-icons/cg";

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c3cbcf;
  padding: 0 var(--padding-section);
`;

const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

function Info() {
  return (
    <StyledInfo>
      <InfoItemContainer>
        <Infoitem
          text="+060 (800) 801-858"
          icon={<HiPhone />}
          iconColor="var(--color-yellow)"
        />
        <Infoitem
          text="info@electro.com"
          icon={<HiOutlineEnvelope />}
          iconColor="var(--color-yellow)"
        />
      </InfoItemContainer>

      <InfoItemContainer>
        <Infoitem text="Store Locator" icon={<HiOutlineLocationMarker />} />
        <Infoitem text="Track Your Order" icon={<HiOutlineTruck />} />
        <Infoitem text="Dollar(US)" icon={<CgDollar />} />
        <Infoitem text="Register or Sign in" icon={<HiOutlineUser />} />
      </InfoItemContainer>
    </StyledInfo>
  );
}

export default Info;

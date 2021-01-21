import styled from "styled-components";

import Administration from "./Administration";
import Technologies from "./Technologies";
import WebsiteServices from "./WebsiteServices";
import OnlineMarketing from "./OnlineMarketing";
import PersonalAssistance from "./PersonalAssistance";

import SmallButton from "../Buttons/SmallButton";

function OurServicesList() {
  return (
    <OurServicesListStyled>
      <Title>Our Services</Title>
      <ServicesContainer>
        <Administration />
        <Technologies />
        <WebsiteServices />
        <OnlineMarketing />
        <PersonalAssistance />
      </ServicesContainer>
      <SmallButton label="GET IN TOUCH" />
    </OurServicesListStyled>
  );
}

const OurServicesListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1b2945;
`;

export const Title = styled.h1`
  font-weight: 800;
  color: ${(props) => (props.primary ? "#1b2945;" : "white")};
  letter-spacing: 1px;
  margin-top: 40px;
`;

const ServicesContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-flow: row;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
  }
`;

export default OurServicesList;

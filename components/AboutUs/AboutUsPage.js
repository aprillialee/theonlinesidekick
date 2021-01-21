import styled from "styled-components";

import { Title } from "../OurServices/OurServicesList";
import SmallButton from "../Buttons/SmallButton";

function AboutUsPage({ props }) {
  return (
    <AboutUsPageStyled>
      <Title>About Us</Title>
      <AboutUsContainer>
        <AboutUsText>
          The Online Sidekick is a remote virtual assistant service. Although,
          we are mainly based in London.
        </AboutUsText>
        <AboutUsText>
          Our speciality is making your life easier, happier and stress free. We
          know what it is like to have too many things on your list to complete
          the tasks that matter and you enjoy.
        </AboutUsText>
        <AboutUsText>
          With a wide skill-set, we decided to bring our services to the people
          who really need them. You!
        </AboutUsText>
      </AboutUsContainer>
      <SmallButton label="GET IN TOUCH" />
    </AboutUsPageStyled>
  );
}

const AboutUsPageStyled = styled.div`
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

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const AboutUsText = styled.p`
  width: 75%;
  font-size: 28px;
  color: white;
  line-height: 35px;
`;

export default AboutUsPage;

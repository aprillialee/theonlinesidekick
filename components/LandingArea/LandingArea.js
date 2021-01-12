import styled from "styled-components";

import SmallButton from "../Buttons/SmallButton";

function LandingArea({ text }) {
  return (
    <LandingAreaStyled>
      <Title>The Online Sidekick</Title>
      <Subtitle>We Get Sh&#42;t Done.</Subtitle>
      <SmallButton label="GET IN TOUCH" />
    </LandingAreaStyled>
  );
}

const LandingAreaStyled = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding-top: 50px;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  color: #2b2a2a;
  margin: 0;
  margin-top: 30px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #2b2a2a;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export default LandingArea;

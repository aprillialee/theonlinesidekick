import styled from "styled-components";

import PricingCard from "../Pricing/PricingCard";

function PricingComponent() {
  return (
    <PricingStyled>
      <PricingTitle>Pricing</PricingTitle>
      <PricingCardRow1>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </PricingCardRow1>
      <PricingCardRow2>
        <PricingCard />
        <PricingCard />
      </PricingCardRow2>
      <PricingCardRow1>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </PricingCardRow1>
    </PricingStyled>
  );
}

const PricingStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  align-items: center;
  width: 85%;
  height: 2000px;
`;

const PricingTitle = styled.h1`
  font-weight: 800;
  color: #2b2a2a;
  letter-spacing: 1px;
`;

const PricingCardRow1 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 320px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    height: 80%;
    align-items: center;
  }
`;

const PricingCardRow2 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  height: 320px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    height: 80%;
    align-items: center;
  }
`;

export default PricingComponent;

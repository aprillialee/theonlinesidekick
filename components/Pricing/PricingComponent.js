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
    </PricingStyled>
  );
}

const PricingStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  align-items: center;
  width: 85%;
  height: 1200px;
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

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export default PricingComponent;

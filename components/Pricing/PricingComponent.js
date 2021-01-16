import styled from "styled-components";

import PricingCard from "../Pricing/PricingCard";
import TouchText from "../TextAreas/TouchText";

function PricingComponent() {
  return (
    <>
      <PricingStyled>
        <PricingTitle>Pricing</PricingTitle>
        <Paragraph>
          There are many options to choose from so that you can find the best
          deal to suit you. Our packages allow you to budget monthly, without
          any surprisng costs! We also can provide work on a per project basis
          or an hourly service. Should you not see what you are looking for,
          then please contact us for a quote.
        </Paragraph>
        <PricingCardRow1>
          <PricingCard hour="10 hours" price="£180" month="/MONTH" />
          <PricingCard hour="15 hours" price="£280" month="/MONTH" />
          <PricingCard hour="20 hours" price="£380" month="/MONTH" />
        </PricingCardRow1>
        <PricingCardRow2>
          <PricingCard hour="30 hours" price="£580" month="/MONTH" />
          <PricingCard hour="40 hours" price="£720" month="/MONTH" />
        </PricingCardRow2>
        <p>*Packages have a minimum of a 3 month commitment.</p>
        <PricingCardRow1>
          <PricingCard hour="Bespoke Project" price="From £220" />
          <PricingCard hour="Websites" price="POA" />
          <PricingCard hour="Ad-Hoc" price="£20" />
        </PricingCardRow1>
      </PricingStyled>
      <TouchText paragraphText="We are available to help today. Get in touch for a free discovery call and we will get started on getting your sh*t done." />
    </>
  );
}

const PricingStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  align-items: center;
  width: 85%;
`;

const PricingTitle = styled.h1`
  font-weight: 800;
  color: #2b2a2a;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  width: 60%;
  text-align: center;
  font-weight: 500;
  color: #2b2a2a;
  font-size: 18px;
`;

const PricingCardRow1 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 320px;
  margin-top: 30px;
  margin-bottom: 30px;

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
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    height: 80%;
    align-items: center;
  }
`;

export default PricingComponent;

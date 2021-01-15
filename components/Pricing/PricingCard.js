import styled from "styled-components";

function PricingCard() {
  return <PricingCardStyled />;
}

const PricingCardStyled = styled.div`
  width: 280px;
  height: 300px;
  box-shadow: 0px 2px 4px 2px rgba(90, 125, 249, 0.53);
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export default PricingCard;

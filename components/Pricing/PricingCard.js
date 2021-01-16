import styled from "styled-components";

import SmallButton from "../Buttons/SmallButton";

function PricingCard(props) {
  return (
    <PricingCardStyled>
      <Hours>
        {props.hour} <PerMonth>{props.month}</PerMonth>
      </Hours>

      <Price>{props.price}</Price>
      <SmallButton label="GET IN TOUCH" />
    </PricingCardStyled>
  );
}

const PricingCardStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 280px;
  height: 300px;
  box-shadow: 0px 2px 4px 2px rgba(90, 125, 249, 0.53);
  border-radius: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 280px;
    height: 300px;
    margin-bottom: 40px;
  }
`;

const Hours = styled.h1`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #3c445c;
  text-align: center;
  margin-top: 30px;
`;

const PerMonth = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 12px;
`;

const Price = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 50px;
  letter-spacing: 0.5px;
  color: #7e7e7e;
`;

export default PricingCard;

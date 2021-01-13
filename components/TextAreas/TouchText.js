import styled from "styled-components";
import SmallButton from "../Buttons/SmallButton";

function TouchText({ paragraphText }) {
  return (
    <TouchTextStyled>
      <TextStyled>
        <Logo src="/SideKickLogoWhite.svg" />
        <ParagraphTextStyled>{paragraphText}</ParagraphTextStyled>
        <SmallButton label="GET IN TOUCH" />
      </TextStyled>
    </TouchTextStyled>
  );
}

const TouchTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 500px;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #3c445c;
`;

const TextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: column nowrap;
  width: 90%;
  height: 95%;
  color: white;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
`;

const ParagraphTextStyled = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  margin: 90px 0px 90px 0px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default TouchText;

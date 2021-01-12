import styled from "styled-components";

function HomeText({ titleText, paragraphText }) {
  return (
    <HomeTextStyled>
      <TextStyled>
        <TitleTextStyled>{titleText}</TitleTextStyled>
        <ParagraphTextStyled>{paragraphText}</ParagraphTextStyled>
      </TextStyled>
    </HomeTextStyled>
  );
}

const HomeTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1b2945;
`;

const TextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: column nowrap;
  width: 90%;
  height: 75%;
  color: white;
`;

const TitleTextStyled = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ParagraphTextStyled = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default HomeText;

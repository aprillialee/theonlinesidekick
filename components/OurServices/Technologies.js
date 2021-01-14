import styled from "styled-components";

function Technologies() {
  return (
    <TechnologiesStyled>
      <Title>Technologies</Title>
      <TechnologiesList>
        <li> HTML, CSS &#38; JS</li>
        <li> React.js</li>
        <li> Next.js</li>
        <li> SQL</li>
        <li> Figma</li>
        <li> InDesign</li>
        <li> Wordpress</li>
        <li> Wix &#38; Squarespace</li>
        <li> Shopify </li>
      </TechnologiesList>
    </TechnologiesStyled>
  );
}

const TechnologiesStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  height: 100%;
  list-style: none;
  @media (max-width: 768px) {
    width: 47%;
  }
`;

const TechnologiesList = styled.ul`
  padding: 0;
  font-size: 15px;
  color: white;
  list-style: none;
  margin-bottom: 20px;

  li:before {
    content: "\u2B21";
    margin-right: 8px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: 500;
  align-self: center;
`;
export default Technologies;

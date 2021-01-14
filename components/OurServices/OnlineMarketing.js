import styled from "styled-components";

function OnlineMarketing() {
  return (
    <OnlineMarketingStyled>
      <Title>OnlineMarketing</Title>
      <OnlineMarketingList>
        <li> Logos</li>
        <li> Social Media Set Up</li>
        <li> Social Media Management</li>
        <li> Newsletter Design &#38; Writing</li>
        <li> Google Analytics Set Up</li>
        <li> Social Media Review/Audit</li>
        <li> Website Critique</li>
        <li> Search Engine Optimisation</li>
      </OnlineMarketingList>
    </OnlineMarketingStyled>
  );
}

const OnlineMarketingStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  height: 100%;
  list-style: none;
  @media (max-width: 768px) {
    width: 47%;
  }
`;

const OnlineMarketingList = styled.ul`
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
export default OnlineMarketing;

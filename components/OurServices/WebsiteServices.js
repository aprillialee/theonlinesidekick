import styled from "styled-components";

function WebsiteServices() {
  return (
    <WebsiteServicesStyled>
      <Title>WebsiteServices</Title>
      <WebsiteServicesList>
        <li> Website Design</li>
        <li> Website Builds</li>
        <li> E-Commerce</li>
        <li> Payment Set-Up</li>
        <li> Contact Forms</li>
        <li> Newsletter Set-Up</li>
      </WebsiteServicesList>
    </WebsiteServicesStyled>
  );
}

const WebsiteServicesStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  height: 100%;
  list-style: none;
  @media (max-width: 768px) {
    width: 47%;
  }
`;

const WebsiteServicesList = styled.ul`
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
export default WebsiteServices;

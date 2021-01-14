import styled from "styled-components";

function Administration() {
  return (
    <AdministrationStyled>
      <Title>Administration</Title>
      <AdministrationList>
        <li>Emails, letters &#38; reports</li>
        <li> Database &#38; CRM management</li>
        <li> Spreadsheet Creation &#38; Updating</li>
        <li> Proof-reading</li>
        <li> Copy typing</li>
        <li> Document Formatting</li>
        <li> Electronic Filling Organisation</li>
        <li> Research</li>
      </AdministrationList>
    </AdministrationStyled>
  );
}

const AdministrationStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  height: 100%;
  list-style: none;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 47%;
  }
`;

const AdministrationList = styled.ul`
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

export default Administration;

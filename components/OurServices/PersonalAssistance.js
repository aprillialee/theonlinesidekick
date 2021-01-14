import styled from "styled-components";

function PersonalAssistance() {
  return (
    <PersonalAssistanceStyled>
      <Title>PersonalAssistance</Title>
      <PersonalAssistanceList>
        <li> Diary / Calendar Management</li>
        <li> Meeting Arrangements</li>
        <li> Email Management / Detox</li>
        <li> Reservations &#38; Bookings</li>
        <li> Travel &#38; Flight Research</li>
        <li> Client &#38; Supplier Communication</li>
        <li> Letters, Cards &#38; Correspondence</li>
        <li> Gift Sourcing</li>
        <li> Personal Expenses</li>
      </PersonalAssistanceList>
    </PersonalAssistanceStyled>
  );
}

const PersonalAssistanceStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  height: 100%;
  list-style: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PersonalAssistanceList = styled.ul`
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
export default PersonalAssistance;

import styled from "styled-components";

function ContactUsPage() {
  return (
    <ContactUsPageStyled>
      <ContactUsContainer>
        <Title>Let's Have A Chat!</Title>
        <Email>hello@theonlinesidekick.com</Email>
      </ContactUsContainer>
    </ContactUsPageStyled>
  );
}

const ContactUsPageStyled = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactUsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 800;
  color: #2b2a2a;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
`;

const Email = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: #2b2a2a;
  margin: 15px;
`;

export default ContactUsPage;

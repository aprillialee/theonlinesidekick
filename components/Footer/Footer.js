import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <FooterTextStyled>
        <Email>hello@theonlinesidekick.com</Email>
        <Instagram src="/instagram.png" />
        <Copyright>
          &#169; 2021 The Online Sidekick - All Rights Reserved
        </Copyright>
      </FooterTextStyled>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background: #1b2945;
`;

const FooterTextStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 65%;
`;

const Email = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: white;
`;

const Instagram = styled.img`
  height: 20px;
  width: 20px;
`;

const Copyright = styled.p`
  color: silver;
  font-size: 0.6rem;
`;

export default Footer;

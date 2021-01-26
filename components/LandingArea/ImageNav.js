import styled from "styled-components";

import Link from "next/link";

function ImageNav() {
  return (
    <ImageNavStyled>
      <Box>
        <img src="/images/blue.jpg" />
        <TextBox>WEBSITE SERVICES</TextBox>
        <Link href="/ourservices">
          <LearnMoreButton>Learn More &#8594;</LearnMoreButton>
        </Link>
      </Box>
      <Box>
        <img src="/images/stapler.jpg" />
        <TextBox>ADMINISTRATION</TextBox>
        <Link href="/ourservices">
          <LearnMoreButton>Learn More &#8594;</LearnMoreButton>
        </Link>
      </Box>
      <Box>
        <img src="/images/telephone.jpg" />
        <TextBox>ONLINE MARKETING</TextBox>
        <Link href="/ourservices">
          <LearnMoreButton>Learn More &#8594;</LearnMoreButton>
        </Link>
      </Box>
      <Box>
        <img src="/images/phone.jpeg" />
        <TextBox>PERSONAL ASSISTANCE</TextBox>
        <Link href="/ourservices">
          <LearnMoreButton>Learn More &#8594;</LearnMoreButton>
        </Link>
      </Box>
    </ImageNavStyled>
  );
}

const ImageNavStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: nowrap;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: white solid 2px;
  width: 35%;
  height: 10%;
  position: absolute;
  color: white;
  background: rgba(0, 0, 0, 0.25);
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LearnMoreButton = styled.button`
  position: absolute;
  align-self: flex-end;
  margin-left: 38%;
  width: 120px;
  height: 50px;
  background: none;
  outline: none;
  border: none;
  font-size: 1rem;
  color: white;
  text-shadow: 0px 4px 4px rgba(90, 125, 249, 0.53);
  cursor: pointer;
  :hover {
    color: purple;
    border-bottom: 1px solid purple;
  }
  @media (max-width: 768px) {
    margin-left: 30%;
  }
`;

export default ImageNav;

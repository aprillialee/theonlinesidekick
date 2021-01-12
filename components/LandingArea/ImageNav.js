import styled from "styled-components";

function ImageNav() {
  return (
    <ImageNavStyled>
      <Box>
        <img src="/images/blue.jpg" />
        <TextBox>WEBSITE SERVICES</TextBox>
      </Box>
      <Box>
        <img src="/images/stapler.jpg" />
        <TextBox>ADMINISTRATION</TextBox>
      </Box>
      <Box>
        <img src="/images/telephone.jpg" />
        <TextBox>ONLINE MARKETING</TextBox>
      </Box>
      <Box>
        <img src="/images/green.jpg" />
        <TextBox>PERSONAL ASSISTANCE</TextBox>
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

export default ImageNav;

import "../styles/globals.css";

import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Logo src="/SideKickLogo.svg" />
      <NavBar /> <Component {...pageProps} />
    </>
  );
}

const Logo = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 50px;
    height: 50px;
    position: fixed;
    margin: 25px;
  }
`;

export default MyApp;

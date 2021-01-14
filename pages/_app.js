import "../styles/globals.css";

import Link from "next/link";

import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/">
        <Logo src="/SideKickLogo.svg" />
      </Link>
      <NavBar /> <Component {...pageProps} />
      <Footer />
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

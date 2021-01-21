import styled from "styled-components";

import Link from "next/Link";

function MenuOptions({ open }) {
  return (
    <MenuOptionsStyled open={open}>
      <Link href="/ourservices">
        <MenuOption>Our Services</MenuOption>
      </Link>
      <Link href="/aboutus">
        <MenuOption>About Us</MenuOption>
      </Link>
      <Link href="/">
        <Logo src="/SideKickLogo.svg" />
      </Link>
      <Link href="/pricing">
        <MenuOption>Pricing</MenuOption>
      </Link>
      <Link href="/contactus">
        <MenuOption>Contact Us</MenuOption>
      </Link>
    </MenuOptionsStyled>
  );
}

const MenuOptionsStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #1b2945;
    color: white;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 20;
  }
`;

const MenuOption = styled.li`
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid purple;
    color: purple;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 90px;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  padding-top: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default MenuOptions;

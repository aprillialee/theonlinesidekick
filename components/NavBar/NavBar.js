import styled from "styled-components";

function NavBar() {
  return (
    <NavBarStyled>
      <MenuOption>Our Services</MenuOption>
      <MenuOption>About Us</MenuOption>
      <Gap src="/SideKickLogo.svg" />
      <MenuOption>Pricing</MenuOption>
      <MenuOption>Contact Us</MenuOption>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const MenuOption = styled.h1`
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const Gap = styled.img`
  width: 90px;
  height: 90px;
  padding-top: 10px;
`;

export default NavBar;

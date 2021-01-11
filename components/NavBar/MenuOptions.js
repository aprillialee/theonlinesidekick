import styled from "styled-components";

function MenuOptions() {
  return (
    <MenuOptionsStyled>
      <MenuOption>Our Services</MenuOption>
      <MenuOption>About Us</MenuOption>
      <Logo src="/SideKickLogo.svg" />
      <MenuOption>Pricing</MenuOption>
      <MenuOption>Contact Us</MenuOption>
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
    background: red;
  }
`;

const MenuOption = styled.li`
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  padding-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default MenuOptions;

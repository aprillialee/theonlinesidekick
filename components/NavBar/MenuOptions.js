import styled from "styled-components";

function MenuOptions({ open }) {
  return (
    <MenuOptionsStyled open={open}>
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
    height: 100vh;
    background: #1b2945;
    color: white;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: all 1 ease-in-out;
  }
`;

const MenuOption = styled.li`
  padding: 0;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 90px;
  }
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

import styled from "styled-components";

import Burger from "./Burger";

function NavBar() {
  return (
    <NavBarStyled>
      <Burger />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 100px;
`;

export default NavBar;

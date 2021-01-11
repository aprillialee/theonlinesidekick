import styled from "styled-components";

import { useState } from "react";

import MenuOptions from "./MenuOptions";

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <MenuOptions />
    </>
  );
}

const BurgerStyled = styled.div`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  right: 0;
  margin: 35px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "red" : "blue")};
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "1.5rem" : "2rem")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate0")};
      width: ${({ open }) => (open ? "1.5rem" : "2rem")};
    }
  }
`;

export default Burger;

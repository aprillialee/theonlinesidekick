import styled from "styled-components";

import Link from "next/link";

function SmallButton(props) {
  return (
    <Link href="/contactus">
      <SmallButtonStyled>{props.label}</SmallButtonStyled>
    </Link>
  );
}

const SmallButtonStyled = styled.button`
  width: 120px;
  height: 45px;
  box-shadow: 0px 2px 4px 2px rgba(90, 125, 249, 0.25);
  border-radius: 5px;
  border: none;
  background: #ffffff;
  outline: none;
  font-size: 10px;
  cursor: pointer;
`;

export default SmallButton;

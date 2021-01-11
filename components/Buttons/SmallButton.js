import styled from "styled-components";

function SmallButton(props) {
  return <SmallButtonStyled>{props.label}</SmallButtonStyled>;
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
`;

export default SmallButton;

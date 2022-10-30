import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export function LinkButton(props) {
  return (
    <StyledLink to={props.to || '/'}>
      <Button onClick={props.onClick}>{props.text}</Button>
    </StyledLink>
  );
}

const Button = styled.button`
  width: fit-content;
  padding: 8px 16px;
  border: 1px solid purple;
  border-radius: 100vw;
  background-color: purple;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: white;
    color: purple;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 100vw;
`;

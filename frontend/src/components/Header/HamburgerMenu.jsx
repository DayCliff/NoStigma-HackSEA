import styled from "@emotion/styled";

function HamburgerMenu(props) {
  return (
    <SVG width={props.width} height={props.width} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="24" width="30" height="6" fill="white"/>
      <rect y="12" width="30" height="6" fill="white"/>
      <rect width="30" height="6" fill="white"/>
    </SVG>
  );
}

export default HamburgerMenu;

const SVG = styled.svg`
  :hover {
    cursor: pointer;
  }
`;
import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "../../index.js";
import { colors } from '../../style.js';
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header(props) {
  const [spacerHeight, setSpacerHeight] = useState(0);
  const containerId = 'header-container-id';
  useEffect(() => {
    setSpacerHeight(
      document.getElementById(containerId).getBoundingClientRect().height
    );
  }, [setSpacerHeight]);

  return (
    <HeaderContainer>
      <Container id={containerId}>
        <Link to="/">
          <Logo src="/images/Logo.png" alt="logo" />
        </Link>
        <Navbar>
          <HamburgerMenu width={32} />
          <LinkContainer>
            <Links>
              {headerLinks.map((link) => 
                <StyledLink key={link.title} to={link.path}>{link.title}</StyledLink>
              )}
            </Links>
          </LinkContainer>
        </Navbar>
      </Container>
      <Spacer height={spacerHeight}/>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header``;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

const Logo = styled.img`
  height: 64px;
`;

const Navbar = styled.nav`
  background-color: ${colors.lightBlue50};
  padding: 16px;
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  padding-right: 16px;
`;

const Links = styled.div`
  display: flex;
  column-gap: 32px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.darkBlue};

  :hover {
    color: white;
  }
`;

const Spacer = styled.div((props) => ({
  height: `${props.height}px`
}));

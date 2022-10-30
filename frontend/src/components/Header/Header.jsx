import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { headerLinks } from "../../index.js";
import { colors } from '../../style.js';
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header(props) {

  return (
    <Container>
      <Logo src="/images/Logo.png" alt="logo" />
      <Navbar>
        <HamburgerMenu width={32} />
        <LinkContainer>
          <Links>
            {headerLinks.map((link) => 
              <StyledLink to={link.to}>{link.title}</StyledLink>
            )}
          </Links>
        </LinkContainer>
      </Navbar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Logo = styled.img`
  height: 64px;
`;

const Navbar = styled.div`
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

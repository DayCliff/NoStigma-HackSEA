import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { colors } from "../../style";
import { footerIcons } from './FooterIcons'

function Footer() {
  const [spacerHeight, setSpacerHeight] = useState(0);
  const containerId = 'footer-container-id';
  useEffect(() => {
    setSpacerHeight(
      document.getElementById(containerId).getBoundingClientRect().height
    );
  }, [setSpacerHeight]);

  return (
    <FooterContainer>
      <Background height={spacerHeight} />
      <Container id={containerId}>
        <IconContainer>
          {footerIcons.map((i) => 
            <Icon key={i.title} href={i.to} target="_blank">
              <img src={i.icon} alt={i.title} />
            </Icon>
          )}
        </IconContainer>
      </Container>
      <Spacer height={spacerHeight} />
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer``;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 16px;
  background-color: ${colors.lightBlue50};
`;

const IconContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

const Icon = styled.a`
  img {
    width: 24px;
  }
`;

const Background = styled.div((props) => ({
  height: `${props.height}px`,
  backgroundColor: 'white',
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: '100%'
}));

const Spacer = styled.div((props) => ({
  height: `${props.height}px`
}));

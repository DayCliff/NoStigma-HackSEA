import styled from "@emotion/styled";
import { colors } from "../../style";
import { footerIcons } from './FooterIcons'

function Footer() {
  return (
    <Container>
      <IconContainer>
        {footerIcons.map((i) => 
          <Icon key={i.title} href={i.to} target="_blank">
            <img src={i.icon} alt={i.title} />
          </Icon>
        )}
      </IconContainer>
    </Container>
  );
}

export default Footer;

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

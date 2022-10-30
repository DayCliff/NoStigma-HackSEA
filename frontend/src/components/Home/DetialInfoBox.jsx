import styled from "@emotion/styled";

function DetailInfoBox(props) {
  return (
    <Container>
      <Icon src={props.icon} />
      <Title>{props.title}</Title>
      <Details>{props.text}</Details>
    </Container>
  );
}

export default DetailInfoBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  width: 256px;
`;

const Icon = styled.img`
  height: 96px;
`;

const Title = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

const Details = styled.div`
  text-align: center;
`;

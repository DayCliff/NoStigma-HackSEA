import styled from "@emotion/styled";
import { colors } from '../../style.js';

function Question(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
      <Responses>
        {props.responses.map((r) => {
          const name = `${props.text}-${r}`;
          return (
            <div key={r}>
              <input
                type="radio"
                id={name}
                name={props.text}
                value={r}
              />
              <label htmlFor={name}><Response>{r}</Response></label>
            </div>
          )
        })}
      </Responses>
    </Container>
  );
}

export default Question;

const Container = styled.div`
  border: 1px solid gray;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.lightBlue50};
  font-size: 16px;
`;

const Text = styled.div`
  font-weight: bold;
`;

const Responses = styled.div`
  display: flex;
  column-gap: 24px;
`;

const Response = styled.span`
  text-transform: capitalize;
`;

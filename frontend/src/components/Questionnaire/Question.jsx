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
              <label htmlFor={name}>{r}</label>
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
  column-gap: 32px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.lightBlue50};
  font-size: 16px;
`;

const Text = styled.div`
  flex-grow: 1;
`;

const Responses = styled.div`
  display: flex;
  flex-direction: column;
`;

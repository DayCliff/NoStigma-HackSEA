import styled from "@emotion/styled";
import Question from "./Question";
import questions from '../../fake/questions';
import { colors } from '../../style.js';

function Questionnaire() {
  const submitResponses = () => {};

  return (
    <Container>
      <h1>Questionnaire</h1>
      <QuestionList>
        {questions.map((q) =>
          <Question key={q.text} text={q.text} responses={q.responses} />
        )}
      </QuestionList>
      <Button type="button" onClick={submitResponses}>Submit</Button>
    </Container>
  );
}

export default Questionnaire;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  row-gap: 16px;
`;

const QuestionList = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0;
`;

const Button = styled.button`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${colors.purple};
  color: ${colors.lightYellow};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 4px gray;

  :hover {
    background-color: ${colors.lightYellow};
    color: ${colors.purple};
  }
`;

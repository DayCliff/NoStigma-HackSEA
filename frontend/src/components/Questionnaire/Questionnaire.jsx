import styled from "@emotion/styled";
import Question from "./Question";
import fakeQuestions from './fakeQuestions';
import { LinkButton } from "../LinkButton";

function Questionnaire() {
  const questions = fakeQuestions;
  const submitResponses = () => {};

  return (
    <Container>
      <h1>Questionnaire</h1>
      <QuestionList>
        {questions.map((q) =>
          <Question key={q.text} text={q.text} responses={q.responses} />
        )}
      </QuestionList>
      <LinkButton to="/results" text="Submit" onClick={submitResponses}/>
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

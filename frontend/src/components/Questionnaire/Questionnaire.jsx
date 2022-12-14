import styled from "@emotion/styled";
import Question from "./Question";
import { questions } from './questions';
import { colors } from '../../style.js';
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
  const navigate = useNavigate();
  const formId = 'question-form';

  const submitResponses = async () => {
    const responses = {};

    const validateForm = () => {
      const inputs = document.forms[formId].elements;

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked)
          responses[inputs[i].name] = inputs[i].value;
      }
  
      return Object.keys(responses).length === questions.length;
    };

    if (!validateForm())
      window.alert('Please respond to all questions.');

    else if (Object.values(responses).filter((r) => r === 'true').length === 0) {
      // all responses were false
      navigate('/results/normal');

    } else {

      // run the machine learning algorithm
      const result = await fetch('/evaluate', {
        method: 'post',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(responses)
      }).then((r) => r.json());

      navigate(`/results/${result.category}`);
    }
  };

  return (
    <Container>
      <h1>Questionnaire</h1>
      <QuestionList id={formId}>
        {questions.map((q) =>
          <Question
            key={q.text}
            text={q.text}
            responses={q.responses}
          />
        )}
        <Button type="button" onClick={submitResponses}>Submit</Button>
      </QuestionList>
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
  row-gap: 6px;
  padding: 0;
  align-items: center;
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
  margin-top: 12px;

  :hover {
    background-color: ${colors.lightYellow};
    color: ${colors.purple};
  }
`;

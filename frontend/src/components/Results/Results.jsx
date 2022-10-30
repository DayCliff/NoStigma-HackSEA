import styled from "@emotion/styled";
import { resultInfo } from "./resultInfo";

function Results(props) {
  const category = resultInfo[props.category];

  return (
    <Container>
      <ResultHeader>
        <h1>Your Results</h1>
        {category.title}
      </ResultHeader>
      <div>{category.description}</div>
      <MoreInfo>
        {category.moreInfo.map((m) =>
          <div key={m.title}>
            <h3>{m.title}</h3>
            <ul>
              {m.content.map((c) =>
                <li key={c}>{c}</li>
              )}
            </ul>
          </div>
      )}
      </MoreInfo>
    </Container>
  );
}

export default Results;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 60%;

`;

const ResultHeader = styled.div`
  font-weight: bold;
  font-size: 18px;

  h1 {
    text-decoration: underline;
  }
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 8px;
    }
  }
`;

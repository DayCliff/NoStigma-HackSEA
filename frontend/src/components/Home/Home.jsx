import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from '../../style.js';
import { intro, details } from './details.jsx';
import DetailInfoBox from './DetialInfoBox.jsx';

function Home(props) {
  return (
    <Container>
      <Content>
        <IntroContent>
          <h2>{intro.title}</h2>
          <IntroParagraph>{intro.text}</IntroParagraph>
        </IntroContent>
        <MainContent>
          <DetailInfoBoxContainer>
            {details.map((d) =>
              <DetailInfoBox
                key={d.title}
                icon={d.icon}
                title={d.title}
                text={d.text}
              />
            )}
          </DetailInfoBoxContainer>
          <Link to="/questionnaire">
            <GoToScreeningButton>GO TO SCREENING</GoToScreeningButton>
          </Link>
        </MainContent>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

const IntroContent = styled.div`
  margin-bottom: 16px;
`;

const IntroParagraph = styled.p`
  padding-left: 32px;
`;

const MainContent = styled.div`
  position: relative;
  border-top: 1px solid black;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 16px;
  padding: 16px 0;
`;

const DetailInfoBoxContainer = styled.div`
  background-color: ${colors.lightBlue50};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  padding: 16px 0;

  @media only screen and (max-width: 1048px) {
    flex-direction: column;
    row-gap: 32px;
    width: fit-content;
    padding: 16px;
  }
`;

const GoToScreeningButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  background-color: ${colors.purple};
  color: ${colors.lightYellow};
  font-weight: bold;
  font-size: 24px;
  border: none;
  box-shadow: 0 4px 4px grey;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${colors.lightYellow};
    color: ${colors.purple};
  }
`;

import styled from "@emotion/styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Page(props) {
  return (
    <Container>
      <Header />
      <Main>
        <MainContentBackground>
          <img src="/images/heart-icon.png" alt="heart" />
        </MainContentBackground>
        {props.content}
      </Main>
      <Footer />
    </Container>
  );
}

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const MainContentBackground = styled.div`
  position: absolute;
  inset: 0;
  max-width: 100vw;
  height: 100%;
  opacity: 0.15;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  img {
    height: 100%;
    max-height: 100vh;
  }
`;
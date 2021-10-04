import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Landing(landingColor) {
  return (
    <>
      <Header landingColor={landingColor} />
      <Main />
      <Footer />
    </>
  );
}

export default Landing;
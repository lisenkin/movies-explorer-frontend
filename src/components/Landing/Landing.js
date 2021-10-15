import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Landing({backgroundColor, loggedIn }) {
  return (
    <>
      <Header backgroundColor="header_type_isDark" />
      <Main />
      <Footer />
    </>
  );
}

export default Landing;
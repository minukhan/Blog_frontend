import Header from "../common/Header";
import Footer from "../common/Footer";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

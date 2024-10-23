import { Outlet } from "react-router-dom";
import Header from "../common/Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;

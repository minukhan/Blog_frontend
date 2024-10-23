import Layout from "../components/layouts/Layout";
import { Outlet } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <Layout>
      <Home />
      <Outlet />
    </Layout>
  );
}
export default Main;

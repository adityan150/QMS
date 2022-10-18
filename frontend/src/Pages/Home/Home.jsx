import "./home.scss";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Header client={"Chandigarh University"} account={"Student"} />
      <div className="home">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Home;

import { Container } from "@mui/material";
import Header from "../header/header";
import Footer from "./footer";
import Slidder from "./imageSlider";
import About from "../about/About";

const Main = () => {
  return (
    <>
      <Header />
      {/* <Container className="parent mt-5 mx-auto"> */}
      <div className="slidder" style={{ marginLeft: "100px" }}></div>
      <Slidder />

      <About />
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default Main;

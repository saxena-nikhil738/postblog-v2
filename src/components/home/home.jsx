import { Container, Grid } from "@mui/material";
import Banner from "../banner/banner";
import Categories from "./Categories";
import Posts from "./Post/Posts";
import { Login } from "@mui/icons-material";
import Footer from "../main/footer";

const Home = () => {
  return (
    <>
      <div className="post-container justify-content-center w-80 mx-auto">
        {/* <div className="col-md-3"><Categories /></div> */}
        <div className="container-child col-md-10 mx-auto">
          {" "}
          <Posts />
        </div>
      </div>
      <Footer />

      {/* </Container> */}
    </>
  );
};
export default Home;

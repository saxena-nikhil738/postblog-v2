import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const Component = styled(AppBar)`
  background: blue;
  color: #000;
`;
const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #fff;
    text-decoration: none;
  }
`;

const Header = () => {
  const { account } = useContext(DataContext);
  const handle = () => {
    account.username = "";
    toast.success("Logged out!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
    });
  };
  return (
    <Component className="">
      <Container className="dev bg-dark ">
        <Link to="/">HOME</Link>
        {/* <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link> */}
        {account.username != "" ? <Link to="/create">CREATE POST</Link> : ""}

        {account?.username != "" ? <Link to="/myblog">MY POST</Link> : ""}

        <Link to="/allblogs">ALL POSTS</Link>
        {account?.username === "" ? (
          <Link to="/Login">
            <button type="button" className="btn btn-light">
              LOGIN
            </button>
          </Link>
        ) : (
          // <input type="button" onClick={handle}>LOGOUT</input>
          <Link to="/">
            <button type="button" className="btn btn-light" onClick={handle}>
              LOGOUT
            </button>{" "}
          </Link>
        )}
      </Container>
      {/* 
      <div className="log col-4">
        {account?.username === "" ? (
          <Link to="/Login"> LOGIN</Link>
        ) : (
          <Link to="/"> LOGOUT</Link>
        )}
      </div> */}
    </Component>
  );
};
export default Header;

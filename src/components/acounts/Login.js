import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  styled,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { API } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "20px 0 0",
});

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;
const loginInitialValue = {
  username: "",
  password: "",
};
const signupInitialValue = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  isUserAuthenticated(false);
  const [account, toggleaccount] = useState("Login");
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const location = useLocation();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const togglesignup = () => {
    account === "signup" ? toggleaccount("Login") : toggleaccount("signup");
    setError("");
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    if (
      signup.name !== "" &&
      signup.username !== "" &&
      signup.password !== ""
    ) {
      try {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
          setError("");
          setSignup(signupInitialValue);
          toggleaccount("Login");
          toast.success("Signup successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        // else {
        //   setError("Invalid cridential!");
        // }
      } catch (error) {
        toast.error("User already exist!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setError("User Already exist change username!");
        console.log(error);
      }
    } else {
      toast.error("Fill required fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      setError("Fill out the required fields");
    }
  };

  const loginUser = async () => {
    if (login.username !== "" && login.password !== "") {
      try {
        let response = await API.userLogin(login);

        if (response.isSuccess) {
          setError("");

          sessionStorage.setItem(
            "accessToken",
            `Bearer ${response.data.accessToken}`
          );
          // console.log("object")
          // sessionStorage.setItem(
          //   "refreshToken",
          //   `Bearer ${response.data.refreshToken}`
          // );
          setAccount({
            username: response.data.username,
            name: response.data.name,
          });
          // console.log(account.data.username)
          isUserAuthenticated(true);
          navigate(location.state?.prevUrl || "/");

          toast.success("Login successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Incorrect username or password!", {
            position: toast.POSITION.TOP_CENTER,
          });
          setError("Incorrect username or password!");
        }
      } catch (err) {
        setError("Incorrect username or password!");
      }
    } else {
      toast.error("Fill required fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      setError("Fill out the required fields");
    }
  };

  return (
    // <div style={{backgroundImage:"url(/background.jpeg)"}} className="bkg">
    <Container>
      <Header />

      <div className="logic mx-auto w-25 mt-5">
        <Card className="mt-5">
          <Image className="logo" src="/download.jpg" alt="Login" />
          {account === "Login" ? (
            <div className="d-flex p-3 flex-column m-3">
              <TextField
                className="mt-2 mb-1"
                required
                //   variant="standard"
                value={login.username}
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Usename"
              />

              <div class="m2-4 flex mt-2">
                <TextField
                  className="border-0"
                  type={type}
                  name="password"
                  label="Enter password"
                  placeholder="Password"
                  value={login.password}
                  onChange={(e) => onValueChange(e)}
                />
                {/* <span class="flex justify-around items-center" onClick={handleToggle}> */}
                {/* <Icon class="absolute mr-10" icon={icon} size={25}/> */}

                {/* </span> */}
              </div>
              <div className="pclass ">
                <p className="p_class text-primary" onClick={handleToggle}>
                  show
                </p>
              </div>

              {error && <Error>{error}</Error>}

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => loginUser()}
              >
                Login
              </button>
              <ToastContainer />
              <Text style={{ textAlign: "center" }}>OR</Text>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => togglesignup()}
              >
                Register now
              </button>
            </div>
          ) : (
            <div className="d-flex p-3 flex-column m-3">
              <TextField
                className="mt-2 mb-1"
                required
                value={signup.name}
                onChange={(e) => onInputChange(e)}
                name="name"
                label="Enter Name"
              />
              <TextField
                className="mt-1 mb-1"
                required
                value={signup.username}
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter UserName"
              />
              <TextField
                className="mt-1 mb-3"
                required
                type={type}
                value={signup.password}
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Paasword"
              />
              <div className="pclass ">
                <p className="p_class text-primary" onClick={handleToggle}>
                  show
                </p>
              </div>
              {error && <Error>{error}</Error>}

              {/* <SignupButton onClick={() => signupUser()}>Signup</SignupButton> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => signupUser()}
              >
                Register
              </button>
              <Text style={{ textAlign: "center" }}>OR</Text>
              {/* <LoginButton onClick={() => togglesignup()}> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => togglesignup()}
              >
                Login
              </button>
            </div>
          )}
        </Card>
      </div>
    </Container>
    // </div>
  );
};
export default Login;

import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./createStyle.css";
import { AddCircle as Add } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";
import { toast } from "react-toastify";

const Container = styled(Box)`
  margin: 50px 100px;
`;
const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});
const Error = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
  background-color= "#F4F8F8"
`;
const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
  padding: 5px;
  font-size: 18px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;
const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);
  const [error, setError] = useState("");

  const url = post.picture
    ? post.picture
    : "https://www.hindustantimes.com/ht-img/img/2023/03/19/550x309/anoir-chafik-2_3c4dIFYFU-unsplash_1679203502580_1679203568552_1679203568552.jpg";

  useEffect(() => {
    const getImage = async () => {
      // try{
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
      // }catch{
      //   console.log("File not find");
      // }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);

  const savePost = async () => {
    try {
      if (post.title !== "" && post.description !== "") {
        let response = await API.createPost(post);
        if (response.isSuccess) {
          navigate("/");
        } else {
          navigate("/");
        }
        toast.success("Post created!", { position: toast.POSITION.TOP_CENTER });
      } else {
        setError("* Please fill Title and Description fields");
      }
    } catch (error) {
      console.log("Empty file cannot post");
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Card
        className=" mx-auto"
        style={{ marginTop: "90px", height: 750, width: 1550 }}
      >
        {/* <CardActionArea > */}
        <CardMedia
          sx={{ height: 550, width: 1450 }}
          style={{ marginLeft: "45px" }}
          component="img"
          image={url}
          alt="Default Image"
        />
        <CardContent className="p-3">
          {error && <Error>{error}</Error>}
          <StyledFormControl className="mt-3">
            <label htmlFor="fileInput">
              <Add
                fontSize="large"
                color="action"
                aria-label="upload picture"
                style={{ cursor: "pointer" }}
              />
              {/* <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              ></IconButton> */}
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <InputTextField
              className="bg-light p-1 "
              required
              onChange={(e) => handleChange(e)}
              name="title"
              placeholder="Title..."
            />
            <Button
              style={{ height: "40px" }}
              onClick={() => savePost()}
              variant="contained"
            >
              Publish
            </Button>
          </StyledFormControl>
          <TextArea
            className="desc bg-light p-1"
            required
            rowsMin={5}
            minRows={2}
            maxRows={2}
            placeholder="Tell your story..."
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </>
  );
};
export default CreatePost;

import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { DataContext } from "../context/DataProvider";
import { useEffect, useState, useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Post from "./home/Post/Post";
import { API } from "../service/api";
import Footer from "./main/footer";

const MyBlog = () => {
  const { account } = useContext(DataContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.getAllPosts({});
        const result = response.data.filter(
          (post1) => post1.username === account.username
        );
        //   let response = await axios.get("/post/${}")
        if (response.isSuccess) {
          setPosts(result);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Spinner
          style={{ marginLeft: "50%", marginTop: "80px", marginBottom: "50px" }}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <>
        {/* <Container className="mx-auto"> */}
        <div
          // className="tab1 justify-content-center"
          style={{ marginTop: "80px" }}
        >
          <div className="post-child-my tab2 d-flex flex-wrap justify-content-start ">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                // <Grid item lg={4} sm={12} >
                <Link
                  to={`details/${post._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Post post={post} />
                </Link>

                // </Grid>
              ))
            ) : (
              <Box
                style={{
                  color: "#878787",
                  margin: "30px 80px",
                  fontSize: 18,
                }}
              >
                no data available to display
              </Box>
            )}
          </div>
        </div>
        {/* </Container> */}
        <Footer />
      </>
    </>
  );
};

export default MyBlog;

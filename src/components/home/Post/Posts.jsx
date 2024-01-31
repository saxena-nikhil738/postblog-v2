import { useEffect, useState } from "react";
import { API } from "../../../service/api";
import { Box, Grid } from "@mui/material";
import { useSearchParams, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Post from "./Post";
import Header from "../../header/header";
import { toast } from "react-toastify";

const Posts = () => {
  // console.log(post.)
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.getAllPosts({});
        //   let response = await axios.get("/post/${}")
        if (response.isSuccess) {
          setPosts(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        // toast.error("No posts found", {position: toast.POSITION.TOP_CENTER});
      }
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <>
        <Spinner
          style={{
            marginTop: "100px",
            marginLeft: "50%",
            marginBottom: "50px",
          }}
        />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="post-class" style={{ marginTop: "80px" }}>
        <div className="post-child d-flex flex-wrap justify-content-start ">
          {/* {posts && posts.length > 0 ? ( */}
          {posts.map((post) => (
            // <Grid item lg={4} sm={12} >
            <Link
              to={`details/${post._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Post post={post} />
            </Link>

            // </Grid>
          ))}
          {/* ) : ( */}
          {/* <Box
              style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}
            >
              no data available to display
            </Box>
          )} */}
        </div>
      </div>
    </>
  );
};
export default Posts;

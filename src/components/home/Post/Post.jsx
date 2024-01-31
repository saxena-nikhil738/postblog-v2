import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { Box, styled } from "@mui/material";
import { addElipsis } from "../../../utils/common-utils";

// const Container=styled(Box)`
// border:1px solid #d3cede;
// border-radius:10px;
// margin:10px;
//  display:flex;
//  allign-item:center;
//  flex-direction:column;
// height:350px;
// &>p{
//     padding:0 5px 5px 5px;
// }`
// const Image=styled('img')({
// //    width:'100%',
//    borderRadius:'10px 10px 0 0 ',
//    objectFit:'contain',
// //    minHeight:'200'
// })
// const Test=styled(Typography)`
// color:#878787;
// font-size:12px`;
// const Heading=styled(Typography)`
// font-size:18px;
// font-weight:600`;
// const Details=styled(Typography)`
// font-size:14px;
// word-break:break-word`;
const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://www.hindustantimes.com/ht-img/img/2023/03/19/550x309/anoir-chafik-2_3c4dIFYFU-unsplash_1679203502580_1679203568552_1679203568552.jpg";
  return (
    //     <Container className="text-center overflow-hidden">
    //          { <Image className="image_css" src={url} alt-="blog" /> }
    //         <Test className="text-center mt-2">{post.categories}</Test>
    //    <Heading>{addElipsis(post.title,20)}</Heading>
    //    <Test>Author: {post.username}</Test>
    //    <Details>{addElipsis(post.description,80)}</Details>
    //     </Container9

    <Card sx={{ minWidth: 290, margin: 1.3 }} className="text-center ">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {addElipsis(post.title, 20)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {/* {console.log(post.createdDate)} */}
            {/* {(new Date(post.createdDate).toISOString())} */}
          </Typography>
          <Typography>Author: {post.username}</Typography>
          <Typography className="mt-4">
            {addElipsis(post.description, 30)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;

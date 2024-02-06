import express from "express";
import { loginUser, signupUser } from "../controller/user-controller.js";
import { uploadImage,getImage } from "../controller/image-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";
// import createPost from "../../client/src/components/create/CreatePost.jsx";
import { createPost,getAllPosts,getPost,updatePost,deletePost } from "../controller/post-controller.js";
import { newComment,getComments ,deleteComment} from "../controller/comment-controller.js";
import upload from '../utils/upload.js'
const router=express.Router();
router.post('/signup',signupUser);
router.post('/Login',loginUser);
router.post('/createpost',authenticateToken, createPost);
router.post('/file/upload',upload.single('file'),uploadImage)
router.get('/file/:filename',getImage);
router.post('/create',authenticateToken ,createPost);
router.get('/posts',authenticateToken,getAllPosts);
router.get('/post/:id',authenticateToken,getPost);
router.put('/update/:id',authenticateToken,updatePost);
router.delete('/delete/:id',authenticateToken,deletePost);
router.post('/comment/new',authenticateToken,newComment);
router.get('/comments',authenticateToken,getComments);
router.delete('/comment/delete/:id',authenticateToken,deleteComment)
export default router;
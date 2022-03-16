const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./uploads");
    },
    filename: function (req,file,cb){
        cb(null, file.filedname+"_"+Date.now()+"_"+file.originalname);
    },
})

let upload = multer({
    storage: storage,
}).single("image");

router.get("/Product",API.fetchAllPosts);
router.get("/Product/:id",API.fetchPostByID);
router.post("/Product", upload, API.createPost);
router.patch("/Product/:id", upload,API.updatePost);
router.delete("/Product/:id",API.deletePost);


router.get("/Review",API.fetchAllReviews);
router.get("/Review/:id",API.fetchReviewByID);
router.post("/Review", upload, API.createReview);
router.patch("/Review/:id", upload,API.updateReview);
router.delete("/Review/:id",API.deleteReview);

router.get("/Order",API.fetchAllOrders);
router.get("/Order/:id",API.fetchOrderByID);
router.post("/Order", upload, API.createOrder);
router.patch("/Order/:id", upload,API.updateOrder);
router.delete("/Order/:id",API.deleteOrder);

router.get("/OrderItem",API.fetchAllOrderItems);
router.get("/OrderItem/:id",API.fetchOrderItemByID);
router.post("/OrderItem", upload, API.createOrderItem);
router.patch("/OrderItem/:id", upload,API.updateOrderItem);
router.delete("/OrderItem/:id",API.deleteOrderItem);

router.get("/User",API.fetchAllUsers);
router.get("/User/:id",API.fetchUserByID);
router.post("/User", upload, API.createUser);
router.patch("/User/:id", upload,API.updateUser);
router.delete("/User/:id",API.deleteUser);

module.exports = router;
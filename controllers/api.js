const products = require("../models/productModel");
const reviews = require("../models/reviewModel");
const orders = require("../models/orderModel");
const orderItems = require("../models/orderItemModel");
const users = require("../models/userModel");




module.exports = class API {

    //Product
    static async fetchAllProducts(req, res) {
        try {
            const productJson = await products.find();
            res.status(200).json(productJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async fetchProductByID(req, res) {
        const id = req.params.id;
        try {
            const productJson = await products.findById(id);
            res.status(200).json(productJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async createProduct(req, res) {
        const productJson = req.body;
        try {
            await products.create(productJson);
            res.status(201).json({
                message: 'Product Created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async updateProduct(req, res) {
        const id = req.params.id;
        const newProductJson = req.body;
        try {
            await products.findByIdAndUpdate(id, newProductJson);
            res.status(200).json({
                message: 'Product Updated'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async deleteProduct(req, res) {
        const id = req.params.id;
        try {
            await products.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Product Deleted'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }


    //Review
    static async fetchAllReviews(req, res) {
        try {
            const reviewJson = await reviews.find();
            res.status(200).json(reviewJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async fetchReviewByID(req, res) {
        const id = req.params.id;
        try {
            const reviewJson = await reviews.findById(id);
            res.status(200).json(reviewJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async createReview(req, res) {
        const reviewJson = req.body;
        try {
            await reviews.create(reviewJson);
            res.status(201).json({
                message: 'Review Created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async updateReview(req, res) {
        const id = req.params.id;
        const newReviewJson = req.body;
        try {
            await reviews.findByIdAndUpdate(id, newReviewJson);
            res.status(200).json({
                message: 'Review Updated'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async deleteReview(req, res) {
        const id = req.params.id;
        try {
            await reviews.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Review Deleted'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    //Order
    static async fetchAllOrders(req, res) {
        try {
            const orderJson = await orders.find();
            res.status(200).json(orderJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async fetchOrderByID(req, res) {
        const id = req.params.id;
        try {
            const orderJson = await orders.findById(id);
            res.status(200).json(orderJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async createOrder(req, res) {
        const orderJson = req.body;
        try {
            await orders.create(orderJson);
            res.status(201).json({
                message: 'Order Created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async updateOrder(req, res) {
        const id = req.params.id;
        const newOrderJson = req.body;
        try {
            await orders.findByIdAndUpdate(id, newOrderJson);
            res.status(200).json({
                message: 'Order Updated'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async deleteOrder(req, res) {
        const id = req.params.id;
        try {
            await orders.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Order Deleted'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    //Order Item
    static async fetchAllOrderItems(req, res) {
        try {
            const orderItemJson = await orderItems.find();
            res.status(200).json(orderItemJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async fetchOrderItemByID(req, res) {
        const id = req.params.id;
        try {
            const orderItemJson = await orderItems.findById(id);
            res.status(200).json(orderItemJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async createOrderItem(req, res) {
        const orderItemJson = req.body;
        try {
            await orderItems.create(orderItemJson);
            res.status(201).json({
                message: 'Order Items Created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async updateOrderItem(req, res) {
        const id = req.params.id;
        const newOrderItemJson = req.body;
        try {
            await orderItems.findByIdAndUpdate(id, newOrderItemJson);
            res.status(200).json({
                message: 'Order Items Updated'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async deleteOrderItem(req, res) {
        const id = req.params.id;
        try {
            await orderItems.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Order Items Deleted'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    //User
    static async fetchAllUsers(req, res) {
        try {
            const orderItemJson = await users.find();
            res.status(200).json(orderItemJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async fetchUserByID(req, res) {
        const id = req.params.id;
        try {
            const userJson = await users.findById(id);
            res.status(200).json(userJson);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async createUser(req, res) {
        const userJson = req.body;
        try {
            await users.create(userJson);
            res.status(201).json({
                message: 'User Created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async updateUser(req, res) {
        const id = req.params.id;
        const newUserJson = req.body;
        try {
            await users.findByIdAndUpdate(id, newUserJson);
            res.status(200).json({
                message: 'User Updated'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async deleteUser(req, res) {
        const id = req.params.id;
        try {
            await users.findByIdAndDelete(id);
            res.status(200).json({
                message: 'User Deleted'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

}
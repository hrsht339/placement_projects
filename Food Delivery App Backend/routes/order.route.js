const express = require("express");
const { orderModel } = require("../models/order.model");

const orderRouter = express.Router();

orderRouter.post("/api/orders", async (req, res) => {
    const order = req.body;
    try {
        const data = new orderModel(order);
        await data.save();
        res.status(200).send({
            msg: "Order created",
            data,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while creating the order",
        });
    }
});

orderRouter.get("/api/orders/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await orderModel.findById(id);
        if (data) {
            res.status(200).send({
                msg: "Order details",
                data,
            });
        } else {
            res.status(404).send({
                msg: "Order not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while fetching the order",
        });
    }
});

orderRouter.put("/api/orders/:id", async (req, res) => {
    const order = req.body;
    const { id } = req.params;
    try {
        const data = await orderModel.findById(id);
        if (data) {
            const newOrder = await orderModel.findByIdAndUpdate(id, order);
            res.status(200).send({
                msg: "Order updated",
                order: newOrder,
            });
        } else {
            res.status(404).send({
                msg: "Order not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while updating the order",
        });
    }
});

module.exports = {
    orderRouter,
};

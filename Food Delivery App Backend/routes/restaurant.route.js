const express = require("express");
const { restaurantModel } = require("../models/restaurant.model");

const restaurantRouter = express.Router();

restaurantRouter.get("/api/restaurants", async (req, res) => {
    try {
        const data = await restaurantModel.find();
        res.status(200).send({
            msg: "All the restaurants below",
            data,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while fetching restaurants",
        });
    }
});

restaurantRouter.post("/api/restaurants", async (req, res) => {
    const rest = req.body;
    try {
        const data = new restaurantModel(rest);
        await data.save();
        res.status(200).send({
            msg: "Restaurant added",
            data,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while adding a restaurant",
        });
    }
});

restaurantRouter.get("/api/restaurants/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await restaurantModel.findById(id);
        if (data) {
            res.status(200).send({
                msg: "One restaurant below",
                data,
            });
        } else {
            res.status(404).send({
                msg: "Restaurant not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while fetching the restaurant",
        });
    }
});

restaurantRouter.get("/api/restaurants/:id/menu", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await restaurantModel.findById(id);
        if (data) {
            res.status(200).send({
                msg: "Menu below",
                menu: data.menu,
            });
        } else {
            res.status(404).send({
                msg: "Restaurant not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while fetching the menu",
        });
    }
});

restaurantRouter.put("/api/restaurants/:id/menu", async (req, res) => {
    const { id } = req.params;
    const menu = req.body;
    try {
        const data = await restaurantModel.findById(id);
        if (data) {
            data.menu.push(menu);
            await restaurantModel.findByIdAndUpdate(id, data);
            res.status(200).send({
                msg: "Menu updated",
                menu: data.menu,
            });
        } else {
            res.status(404).send({
                msg: "Restaurant not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while updating the menu",
        });
    }
});

restaurantRouter.delete("/api/restaurants/:Rid/menu/:Mid", async (req, res) => {
    const Rid = req.params.Rid;
    const Mid = req.params.Mid;
    try {
        const data = await restaurantModel.findById(Rid);
        if (data) {
            const updatedMenu = data.menu.filter((item) => item._id !== Mid);
            data.menu = updatedMenu;
            await restaurantModel.findByIdAndUpdate(Rid, data);
            res.status(200).send({
                msg: "Menu deleted",
                menu: data.menu,
            });
        } else {
            res.status(404).send({
                msg: "Restaurant not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while deleting the menu item",
        });
    }
});

module.exports = {
    restaurantRouter,
};

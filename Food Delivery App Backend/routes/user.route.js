const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/api/register", async (req, res) => {
    const { name, email, password, address } = req.body;
    try {
        bcrypt.hash(password, 3, async (err, hashed) => {
            const user = new userModel({
                name,
                email,
                password: hashed,
                address,
            });
            await user.save();
            res.status(201).send({
                msg: "User registered",
                user,
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while registering the user",
        });
    }
});

userRouter.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ id: user._id }, "masai");
                    res.status(201).send({
                        msg: "User logged in",
                        token,
                    });
                } else {
                    res.status(401).send({
                        msg: "Wrong password",
                    });
                }
            });
        } else {
            res.status(404).send({
                msg: "User not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while logging in",
        });
    }
});

userRouter.put("/api/user/:id/reset", async (req, res) => {
    const { id } = req.params;
    const { email, password, newPassword } = req.body;
    try {
        const user = await userModel.findById(id);
        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    bcrypt.hash(newPassword, 3, async (err, hashed) => {
                        user.password = hashed;
                        await userModel.findByIdAndUpdate(id, user);
                        res.status(204).send({
                            msg: "Password changed",
                            user,
                        });
                    });
                } else {
                    res.status(401).send({
                        msg: "Wrong password",
                    });
                }
            });
        } else {
            res.status(404).send({
                msg: "User not found",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: "An error occurred while resetting the password",
        });
    }
});

module.exports = {
    userRouter,
};

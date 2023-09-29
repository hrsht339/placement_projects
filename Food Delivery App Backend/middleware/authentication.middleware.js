const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, "masai");
            req.body.user = decoded.id;
            next();
        } catch (err) {
            res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
    } else {
        res.status(401).json({ message: "Unauthorized: Please login first" });
    }
};

module.exports = {
    authentication
};

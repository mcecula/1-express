const User = require("../models/UserModel");

module.exports = {
    index: (_req, res) => {
        User.find()
            .lean()
            .then((users) => {
                res.render("home", { users: users });
            })
            .catch((err) => {
                res.send(err);
            });
    },
};
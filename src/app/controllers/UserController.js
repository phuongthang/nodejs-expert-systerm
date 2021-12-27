const User = require("../models/User");

class UserController{
    /**
     * [GET] /users
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     */
    index(req, res, next){
        res.send('Hello World');
    }

    /**
     * [POST] /users
     * @param {*} req 
     * @param {*} res
     * @param {*} next
     */
    store(req, res, next){
        const user = new User(req.body.data);
        user.save();
    }
};

module.exports = new UserController;
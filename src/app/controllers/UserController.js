const User = require("../models/User");

class UserController{
    /**
     * [GET] /users
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     */
    index(req, res, next){
        User.find({})
            .then(users => res.json({status:200, message:"Tạo user thành công", data: users}))
            .catch(next)
    }

    /**
     * [POST] /users
     * @param {*} req 
     * @param {*} res
     * @param {*} next
     */
    store(req, res, next){
        const user = new User(req.body.data);
        user.save((err)=>{
            if(err){
                res.json({status:500,message:"Tạo user thất bại"});
            }
            res.json({status:200, message:"Tạo user thành công"});
        });

    }
};

module.exports = new UserController;
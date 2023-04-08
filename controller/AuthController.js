const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, function (err, hash) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            Email: req.body.Email,
            Name: req.body.Name,
            Phone: req.body.Phone,
            Password: hash
        })
        user.save().then(user => {
            res.json({
                massage: "User added"
            })
        })
            .catch(error => {
                res.json({
                    massage: error
                })
            })
    })

}

const login = (req, res, next) => {
    var email = req.body.Email
    var password = req.body.Password
    User.findOne({ $or: [{ Email: email }, { Password: password }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password,user.Password,function(err,result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                        res.json({
                            message:'user'
                        })
                    }
                    else{
                        res.json(
                            {
                                message:'Password not matched'
                            }
                        )
                    }
                })
            } else {
                res.json({
                    message: 'no user'
                })
            }
        })
}

module.exports = {
    register,login
}
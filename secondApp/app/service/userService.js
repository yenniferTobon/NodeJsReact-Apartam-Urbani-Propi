const User = require('../models/user.Model');

exports.getUserByUsername = async (username) =>{
    return await User.findOne({ username:username });
};

exports.createUser = async(user) =>{
    return await User.create(user);
}
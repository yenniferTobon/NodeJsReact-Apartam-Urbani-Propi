const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Scheme({
    name: { type: String, require:true },
    username: { type: String, require:true },
    password: { type: String, require:true },
    state: { type: Boolean, require:true },
    lastLogin:{ type: Date },
    passwordAttempts: { type: Number }
});

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.pre('save', async function(next){
    const user = this;

    if (!user.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); //cifrar el password
    user.password = hashedPassword;

    return next();
});

UserSchema.methods.comparePassword = async function(){
    let result = await bcrypt.compare(password, this.password);
};

mongoose.model('user', UserSchema);

module.exports = mongoose.model('user');

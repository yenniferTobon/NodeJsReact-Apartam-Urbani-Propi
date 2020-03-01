    const authServic = require("../service/authService")


exports.login= async(require, response)=>{
    const user=require.body.user;
    const pass=require.body.pass;
    
    const tokenres = authServic.autenticar(user, pass);
    const res = {
        token: tokenres
    };
    response.status(200).send(res);
};


exports.signUp = async (req, res) =>{
    try{
        const user = await authServic.signUp(req.body);
        if (!user){
            return res.status(500).send({error: 'El usuario no ha podido ser creado'});
        }
        return res.status(201).send(user);
    } catch(err){
        console.log (err);
        return res.status(500).send(err);
    }
};

exports.autenticar = async(req, res) => {
    const token = req.body.token;
    try {
        const decodedToken = authServic.validarToken(token);
        res.status(200).send(decodedToken);
    }catch(err){
        res.status(500).send(err);
    }
};


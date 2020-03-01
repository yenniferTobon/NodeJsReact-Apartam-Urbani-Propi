const controller = require("../controllers/authController.js")

module.exports = (router) => {
    router.route('/login').post(controller.login);
    router.route('/autenticar').post(controller.autenticar);
    router.route('/singUp').post(constructor(controller.signUp));
};
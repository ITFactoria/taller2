//const LoginController = function () {
const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');


router.post('/', function (req, res) {
    console.log("login");
    let user = req.body.user;
    let password = req.body.password;

    if (user == 'admin' && password == '336699') {

        let data = {
            user: user,
            datelogin: new Date(),
            type: 'admin'
        }
        let secreto = 'corona';
        let token = jwt.sign({
            data: data
        },
            secreto);
        res.json({ token: token });

    }
    else {
        res.send('data incorrecta')
    }
})
//return router;

//}
module.exports = router; 
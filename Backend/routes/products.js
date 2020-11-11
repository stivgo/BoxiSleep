const db = require('../db/db.json');
const express = require("express");
const nodemailer = require("nodemailer");


const router = express.Router();

router.get('/products', (req, res, next) => {
    console.log(db)
    res.status(200).json(db);
    next();
});

router.get('/products/:id', (req, res, next) => {
    const { id } = req.params;
    for (let i = 0; i < db.length; i++) {
        if (db[i].id == id) {
            console.log(db[i])
            res.status(200).json(db[i]);
        }
    }
    next()

});

router.post('/sendemail', (req, res, next) => {
    console.log(req.body);
    const { mensaje } = req.body;
    if (mensaje) {
        let valor = sendEmail(mensaje)
        if (valor) {
            res.status(201).json({ data: "Email enviado" })
        }

    } else {
        res.status(400).json({ error: "Invalid body request" });
    }
})





const sendEmail = (mensaje) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'buenvecinoeco@gmail.com',
            clientId: '1012941572035-8vq7tb45q9ko490jnk95rbd42bcgigqs.apps.googleusercontent.com',
            clientSecret: 'xVj0tU4XeoHdzorCdTh6Xd7a',
            refreshToken: '1//044Z1SEuN6ehxCgYIARAAGAQSNwF-L9IrnzKzOAvrUqgyNMYqR3awq0JaB8lWN6O-FDlIQfe9bPUu6AbK8UmfP0sglQh5GBwMOTU',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = {
        from: '"Prueba Full Stack " <buenvecinoeco@gmail.com>', // sender address
        to: "stiveng0630@gmail.com", // list of receivers
        subject: "Compra de Colchon", // Subject line
        text: mensaje, // plain text body
    };

    transporter.sendMail(info, (err, res) => {
        if (err) {
            console.log(err);
            return false
        } else {
            console.log('Se ha enviado el correo')
            return true;
        }

    })
}

module.exports = router;
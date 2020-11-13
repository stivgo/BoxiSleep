//Dependencias del proyecto
const express = require("express");
const product = require("./routes/products")
const cors = require("cors")


//Inicializacion servidor
const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(product);




//Middleware sobre error general
servidor.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        res.status(500).json({ error: "Internal error" })
    } else {
        next()
    }
});

//Inicialización servidor
servidor.listen(3000, () => {
    console.log("Servidor escuchando puerto 3000");
});



const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/mysql')
const config = require('./config.json')
const router = express.Router()
const app = express()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

var conexion = db.conectarDB(config.host,config.user,config.password,config.database)

app.listen(3000, ()=> {
    console.log("App corriendo en el puerto ", 3000)
    conexion.connect((err) => {
        if (err){
            console.log("Ha ocurrido un error:", err.message)
        }
    })
    console.log("App conectada a la base de datos")
})
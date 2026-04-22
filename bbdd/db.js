const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "eldata2026",
  database: "test"
})

connection.connect((err) => {
  if (err) {
    console.log("El error es:" + err)
    return
  }
  console.log("Ha conectado correctamente la BBDD")
})

module.exports = connection
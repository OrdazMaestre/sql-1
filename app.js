const express = require("express")
const app = express()
const PORT = 3000
const db = require("./bbdd/db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios_lenguajes", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "El error es: " + err.message })
    }

    res.json({
      total: results.length,
      usuarios: results
    })
  })
})

app.get("/usuarios/nombre/:name", (req, res) => {
  const name = req.params.name

  db.query(
    "SELECT * FROM usuarios_lenguajes WHERE nombre = ?",
    [name],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "El error es: " + err.message })
      }

      if (result.length === 0) {
        return res.status(404).json({ error: "usuario no encontrado" })
      }

      res.json({ usuario: result })
    }
  )
})

app.listen(PORT, () =>
  console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
)
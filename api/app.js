const express = require("express")
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello Express")
})

app.get('/user', (req, res) => {
    res.send({username: "Tian Tong"})
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}...`)
})

const express = require("express")
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send("Hello Express")
})

app.get('/api', (req, res) => {
    res.send("API is working...")
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}...`)
})

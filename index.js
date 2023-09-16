const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');



app.get('/', async (req, res) => {
    res.send("opop")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
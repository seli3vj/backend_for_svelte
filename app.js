const express = require('express')
const app = express()
const port = 3000
const data = require('./MOCK_DATA.json')
var cors = require('cors');
app.use(cors());
app.get('/test', (req, res) => {

    res.header("Content-Type",'application/json');

    res.send(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

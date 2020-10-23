const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/nasa', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error)
        })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
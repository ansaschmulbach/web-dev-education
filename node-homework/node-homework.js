const express = require('express')
const axios = require('axios')
const fs = require('fs')
const app = express()
const port = 3000


app.get('/nasa', (req, res) => {

    function input(response) {
        var data = ""
        data += "Title: " + response.data['title'] + '\n'
        data += "url: " + response.data['url'] + '\n'
        data += "date: " + response.data['date'] + '\n'
        data += "copyright: " + response.data['copyright'] + '\n'
        fs.appendFile('data.txt', data, (err) => {
            if (err) res.send(err);
        })
    }

    axios.get('https://api.nasa.gov/planetary/apod?api_key=OA7lcx4zfQyHiM7XJVVaj6MveyHmvyJ9fPrIJlwL&date=2020-08-10')
        .then(input)
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OA7lcx4zfQyHiM7XJVVaj6MveyHmvyJ9fPrIJlwL&date=2020-08-09')
        .then(input)
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OA7lcx4zfQyHiM7XJVVaj6MveyHmvyJ9fPrIJlwL&date=2020-08-08')
        .then(input)
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OA7lcx4zfQyHiM7XJVVaj6MveyHmvyJ9fPrIJlwL&date=2020-08-07')
        .then(input)
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OA7lcx4zfQyHiM7XJVVaj6MveyHmvyJ9fPrIJlwL&date=2020-08-06')
        .then(input)

    res.send('Sucess!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
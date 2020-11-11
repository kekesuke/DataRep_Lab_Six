const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

// parse a body of http request
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//allowing us to use cross origin resource sharing ( cors)
app.use(cors());
//
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


//app.get listening for http get request at the url in '' 
app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    //after the app recieve the get request it is sending a json response to the webpage;
    res.status(200).json({ 
        message: "Everything is alright",
        movies: mymovies })
});


//app.post listening for http get request at the url in '' 
app.post('/api/movies', (req, res) => {
    console.log('Movie recieved!')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.poster)
})

//listening at port 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
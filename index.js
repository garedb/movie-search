// Load the environment variables
require('dotenv').config()

// Require needed modules
let express = require('express')
let fetch = require('node-fetch')

// Declare a new express app
let app = express()

// Set the template language to EJS
app.set('view engine', 'ejs')

// Declare routes
app.get('/', (req, res) => {
	res.render('home')
})

app.get('/search', (req, res) => {
	console.log(req.query.query, process.env.OMDB_API_KEY)
	let page = req.query.page || 1
	let url = `http://www.omdbapi.com/?s=${req.query.query}&apikey=${process.env.OMDB_API_KEY}&page=${page}`
	console.log(url)

	fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		res.render('results', { results: data.Search, query: req.query.query, page: parseInt(page) })
	})
	.catch(err => {
		console.log('An error!', err)
	})
})

// Pick a port for it to listen on
app.listen(3000, () => {
	console.log('Ready to rock!')
})
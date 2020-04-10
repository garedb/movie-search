// Require needed modules
let express = require('express')

// Declare a new express app
let app = express()

// Declare routes
app.get('/', (req, res) => {
	res.send('Home page stub')
})

// Pick a port for it to listen on
app.listen(3000, () => {
	console.log('Ready to rock!')
})
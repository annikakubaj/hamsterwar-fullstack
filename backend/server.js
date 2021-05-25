const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
// const hamsters = require('./routes/hamsters.js')
// const matches = require('./routes/matches.js')
// const matchwinners = require('./routes/matchwinners.js')
// const winners = require('./routes/winners.js')
// const losers = require('./routes/losers.js')

//Heroku - Om PORT är ett värde/nummer så kommer vi använda den annars 1337
const PORT = process.env.PORT || 1337

const buildFolder = path.join(__dirname, '../build')
// const buildImgFolder = path.join(__dirname, 'build?')

//Middleware
//logger som skriver ut info om varje request i terminalen
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.params);
    next()
})
 
app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder) )

//Routes. Hanterar resursen "web root" - request och response. 
app.get('/', (req, res) => {
    res.send('Hamsterwars - Fullstack Project')
})

// test api
const hamsters = ['hamsters', 'loves', 'food']

app.get('/hamsters', (req, res) => {
    res.send(hamsters)
})

//Viktigt att denna ligger sist, fångar alla övriga request 
// först sker alltid backend routing och sedan frontend 
// för att frontend routing ska fungera
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})
 
// REST API för hamsters & matches
// app.use('/hamsters', hamsters)
// app.use('/matches', matches)  
// app.use('/matchwinners', matchwinners)
// app.use('/winners', winners)
// app.use('/losers', losers)

 
//startar servern
app.listen(PORT, () => {
    console.log('Server is listening on port' + PORT);
})
const express = require('express'),
    fs = require('fs'),
    url = require('url'),
    cors = require('cors')

const app = express()

const corsOptions = {
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const port = 3000
const logins = []



app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'))

app.post('/logins', (req, res) => {
    const saveFile = __dirname + '/public/data/logins.json'
    logins.push(req.body)
    fs.writeFile(saveFile, JSON.stringify(logins), (err) => {
        if (err) return console.log('There was an issue with the write:', err)
        console.log('DATA', logins)
    })

})

app.get('/users', (req, res) => {
    res.send('Hello users')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
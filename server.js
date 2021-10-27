const express = require('express')
const {fetchUserFromAPI, fetchAddressAPI} = require('./src/api')
const app = express()
const port = 3000


app.get('/api', (req, res, next) => {
    fetchUserFromAPI().then(data => {
            res.json(data.data.results)
        }).catch(err => {
            next(err)
            console.error(err)
        })
})

app.get('/address_api', (req, res, next) => {
    fetchAddressAPI().then(payload => {
            res.json(payload.data)
        }).catch(err => {
            next(err)
            console.error(err)
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
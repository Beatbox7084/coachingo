const c_arts = require('./conn') // importing "C_ARTS()" FROM "CONN.JS" FILE.
c_arts().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_banking = require('./conn') // importing "C_BANKING()" FROM "CONN.JS" FILE.
c_banking().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_commerce = require('./conn') // importing "C_COMMERCE()" FROM "CONN.JS" FILE.
c_commerce().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_judiciary = require('./conn') // importing "C_JUDICIARY()" FROM "CONN.JS" FILE.
c_judiciary().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_police = require('./conn') // importing "C_POLICE()" FROM "CONN.JS" FILE.
c_police().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_railway = require('./conn') // importing "C_RAILWAY()" FROM "CONN.JS" FILE.
c_railway().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_school = require('./conn') // importing "C_SCHOOL()" FROM "CONN.JS" FILE.
c_school().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_science = require('./conn') // importing "C_SCIENCE()" FROM "CONN.JS" FILE.
c_science().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_teaching = require('./conn') // importing "C_TEACHING()" FROM "CONN.JS" FILE.
c_teaching().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const c_upsc = require('./conn') // importing "C_UPSC()" FROM "CONN.JS" FILE.
c_upsc().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_airforce = require('./conn') // importing "P_AIRFORCE()" FROM "CONN.JS" FILE.
p_airforce().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_bca = require('./conn') // importing "P_BCA()" FROM "CONN.JS" FILE.
p_bca().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_iit_jee = require('./conn') // importing "P_IIT_JEE()" FROM "CONN.JS" FILE.
p_iit_jee().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_navy = require('./conn') // importing "P_NAVY()" FROM "CONN.JS" FILE.
p_navy().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_nda = require('./conn') // importing "P_NDA()" FROM "CONN.JS" FILE.
p_nda().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_neet = require('./conn') // importing "P_NEET()" FROM "CONN.JS" FILE.
p_neet().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})

const p_ssb = require('./conn') // importing "P_SSB()" FROM "CONN.JS" FILE.
p_ssb().then((resp) => {
    resp.find().toArray().then((data) => { //search query commd.
        console.warn(data) //print data commd.
    })
})


/*
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

//connecting to MongoDB Database.
mongoose.connect("mongodb+srv://infinityx:7084954908@coching.kcnbp.mongodb.net/test?authSource=admin&replicaSet=atlas-jfn7c9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {});

mongoose.connection.once('open', function() {
    console.log('CONNECTION ESTABLISHED'); //statement return if DB Successfully connected.
}).on('error', function(error) { // generate the Error if Any Problem arises in connecting.
    console.log('ERROR IS: ', error)
});

var database
app.get('/coching.kcnbp.mongodb.net/ocaching/arts', (req, res) => {
    database.collection('arts').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/coching.kcnbp.mongodb.net/coaching/banking', (req, res) => {
    database.collection('banking').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/coching.kcnbp.mongodb.net/coaching/commerce', (req, res) => {
    database.collection('commerce').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/judiciary', (req, res) => {
    database.collection('judiciary').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/police', (req, res) => {
    database.collection('police').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/railway', (req, res) => {
    database.collection('railway').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/school', (req, res) => {
    database.collection('school').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/science', (req, res) => {
    database.collection('science').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/teaching', (req, res) => {
    database.collection('teaching').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/coaching/upsc', (req, res) => {
    database.collection('upsc').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/airforce', (req, res) => {
    database.collection('airforce').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/bca', (req, res) => {
    database.collection('bca').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/iit jee', (req, res) => {
    database.collection('iit jee').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/navy', (req, res) => {
    database.collection('navy').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/nda', (req, res) => {
    database.collection('nda').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/neet', (req, res) => {
    database.collection('neet').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get('/api/products/ssb', (req, res) => {
    database.collection('ssb').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})
*/
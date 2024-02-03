const express = require('express')
const {engine} = require('express-handlebars')
const {join} = require('path');

const app = express()
const PORT = process.env.PORT || 4000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', join(__dirname, 'views'))

app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).render('500')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
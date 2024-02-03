const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000


app.use((req, res) => {
    res.send('The Meadowlark Travel Website')
})

app.use((err, req, res, next) => {
    res.status(500)
    res.send('500 -- Server Error')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
const express = require('express')
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors')

const app = express()
 // creates an express() app instance that can be used to configure(create) the server

app.use(cors()) // allows cross-origin requests

app.use(express.json()) // parses the request body to JSON

app.get('/',(req,res)=>{
    res.send('Hello World') // sends a response to the client
})

app.use('/ai',aiRoutes) // uses the aiRoutes to handle requests to the /ai endpoint

module.exports = app; // exports the app instance to be used in other files
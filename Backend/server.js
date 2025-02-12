require('dotenv').config() // loads the environment variables from the .env file
const app = require("./src/app")

app.listen(3000,()=>{ // starts the app on port 3000
    console.log('Server is running on port http://localhost:3000')   // starts the server on port 3000
})// ()=>{}  <=>callback runs when the server is started
//it can handle requests and responses
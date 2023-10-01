const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectDB = require('./DB/db')
const router = require('./router/router')
const auth = require('./router/Authrouter')



const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()


app.use('/api/v1', router)
app.use('/api/v2', auth)



ConnectDB()
const port =2000
app.listen(port , ()=> console.log(`http://localhost:${port}`))
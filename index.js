
const mongoose = module.require('mongoose')
const express = module.require('express')
const dotenv = module.require('dotenv')
const cors = module.require('cors')

const the_subjects = module.require('./routes/messagesRoutes')

const app = express()
dotenv.config()
app.use(cors())


app.use(express.json())

app.use('/sub', the_subjects)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('running port ' + PORT)
})

mongoose.connect(process.env.CONNECT_DB).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log('failed to connect due to ' + err)
})



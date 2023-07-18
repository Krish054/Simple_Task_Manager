const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config({ path: '.env' });
const connectDB = require('./db/connect')

app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, console.log('Server is listening'))
    }
    catch(error){
        console.log(error);
    }
}

start()

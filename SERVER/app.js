const express = require('express')
const connectDB =require("./ConnetData/ConnectDB")
const notfound =  require("./MiddleWare/notFound")
const UserRoute = require('./Routes/Route')
const errorHandler = require('./MiddleWare/errorHandler')
const cors = require("cors")

const app = express()
app.use(cors({origin:["http://localhost:5173"],credentials:true,}));
// require('dotenv').config()






app.use(express.json())
app.use("/user",UserRoute)
app.use(notfound);
app.use(errorHandler);

const port = process.env.PORT || 8980

const startApp=async()=>{
    try {
        await connectDB("mongodb+srv://user123:kar123@cluster0.kqnuubw.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connected to database');
        app.listen(port,()=>{
            console.log('server running on port 8980');
        })
        
    } catch (error) {
        console.log(error);
    } 
}


startApp()
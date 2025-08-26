import express,{json} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers/router.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './utils/db.js';

const app = express();
app.use(cors({origin:"*"}));
app.use(express.json())

app.use(router);
const PORT  = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`API is running on ${PORT}`);
});



connectDB().then(()=>{
    console.log("Connection working smoothly")
}).catch((err)=>{
    console.log(err)
})
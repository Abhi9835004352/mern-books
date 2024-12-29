import {PORT, mongoDBURL} from './config.js';
import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//middleware for handelling cors policy

app.use(cors());


// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.get('/', (req,res,next) => {
    res.send('Hello World');
})

//route to save a new book

app.use('/books', bookRoutes);



mongoose
.connect(mongoDBURL)
.then(result => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {console.log(err)});



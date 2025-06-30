import express from "express";
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { rateLimiter } from './middleware/rateLimiter.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// This is what we call a middleware(   )
// One thing to remember is that the order of the middleware is very much compulsory!
if(process.env.NODE_ENV !== 'production'){
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    )
}
app.use(express.json()); //It will parse the JSON bodies: req.body
app.use(rateLimiter)

app.use("/api/notes", notesRoutes);//This is use so that we don't need to write "/api/notes" in every new route created!

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("App is listening at port: ", PORT)
        console.log("The URL is http://localhost:5001/")
    })

})

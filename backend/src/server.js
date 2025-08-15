import express from "express"
import notesroutes from "./routes/notesroutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors"
dotenv.config();
console.log("MONGO_URL:", process.env.MONGO_URL);


const app = express();
app.use(express.json());
app.use(cors(
   { origin: "http://localhost:5173", }
)) // parses JSON bodies into req.body
app.use(rateLimiter);


const PORT=process.env.PORT|| 5000;

app.use("/api/notes",notesroutes);




connectDB().then(() =>{
   app.listen(PORT, () => {
      console.log("server started");
   });
})





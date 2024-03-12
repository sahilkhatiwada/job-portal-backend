import cors from "cors";
import express from "express";
import connectDB from "./dbConfig/connect.db.js";
import jobRoutes from "./routes/job.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// to make app understand json
app.use(express.json());

// cors
app.use(cors());

// connect database
await connectDB();

// register routes
app.use(userRoutes);
app.use(jobRoutes);
// port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

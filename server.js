import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB ERROR:", err));

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import txRoutes from "./routes/transactions.js";
import classRoutes from "./routes/classes.js";   

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/transactions", txRoutes);
app.use("/api/classes", classRoutes);            

app.listen(5005, () => console.log("Server running on port 5005"));

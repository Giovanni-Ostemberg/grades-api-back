import mongoose from "mongoose";
import dotenv from "dotenv";
const result = dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

export { db };

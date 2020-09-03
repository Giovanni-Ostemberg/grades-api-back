import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { db } from "./models/index.js";
import { gradeRouter } from "./routes/gradeRouter.js";
const result = dotenv.config();

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado");
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("API em execucao");
});
app.use(gradeRouter);

app.listen(process.env.PORT || 8081, () => console.log("API iniciada!"));

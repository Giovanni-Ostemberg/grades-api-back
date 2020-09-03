import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://GiOstemberg:Gi08011993@clustergiovanni.xrxse.mongodb.net/grades_desafio?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Conectado"))
  .catch((err) => {
    console.log("Erro ao conectar: " + err);
  });

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("student", gradeSchema);

const gradeModel = mongoose.model("student");

export { gradeModel };

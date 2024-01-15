import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
const { Schema } = mongoose;

const studySchema = new Schema({
  image: String,
  title: String,
  company: String,
});
const Study = mongoose.model("Study", studySchema);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const study = await Study.find({});
    res.send(study);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const study = await Study.findById(id);
    res.send(study);
  } catch (error) {
    res.send(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const { image, title, company } = req.body;
    const newStudy = new Study({ image, title, company });
    await newStudy.save();

    res.send("Got a POST request");
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, company } = req.body;
    const study = Study(id, { image, title, company });
    res.send("Got a PUT request at /user");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const study =await Study.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

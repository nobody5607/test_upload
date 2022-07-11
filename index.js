import formidable from "express-formidable";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//import routes
import uploadRoute from "./routes/uploadRoute";

const app = express();

dotenv.config();
app.use(cors()); //cors
// app.use(express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use(formidable());

//
app.use("/api/v1/upload", uploadRoute);

const port = 3004;
app.listen(port, () => {
  console.log("Server is running...");
  console.log("http://localhost:" + port);
});

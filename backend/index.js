const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
}); 

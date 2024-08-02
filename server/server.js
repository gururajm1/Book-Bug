const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const userRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors()); 
app.use(
  cors({
    origin: "http://localhost:3000", 
  })
);

app.use(express.json());

mongoose.connect(
  "mongodb+srv://guruguru6631:gururajm1@cluster0.tskztpg.mongodb.net/teet",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

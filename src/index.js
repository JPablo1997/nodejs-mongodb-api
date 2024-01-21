const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const userRoutes = require("./routes/user")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Middleware
app.use(express.json())
app.use("/api", userRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((err) => console.log(err))

app.get('/',
   (req, res) => res.send('Dockerizing Node Application'))

app.listen(PORT,
   () => console.log(`⚡️[bootup]: Server is running at port: ${PORT}`));

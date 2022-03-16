//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { route } = require('./routes/routes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("uploads"));


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Connected to the database!'))
.catch((err) => console.log(err));

app.use("/Api/", require("./routes/routes"));

app.listen(port, () => console.log('Server running at http://localhost:5000'));
const express = require("express")
const router = require("./router/auth-router")
const router2 = require("./router/router2")
const port = process.env.PORT || 5000;
const connectDB = require('./database/connectdb')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json()) //middleware
app.use(express.urlencoded({ extended: false }))

app.use("/", router)
app.use("/", router2)


app.listen(port, () => {
    console.log(`server is running at ${port}`);
})




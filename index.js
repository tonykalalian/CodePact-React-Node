const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
port = process.env.PORT || 3001;

const currentDirectory = __dirname;
const buildDirectory = path.join(currentDirectory, 'build');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow all CORS request
app.use(cors({origin: '*'}));

const auth = require("./routes/auth");
const users = require("./routes/users");
const products = require("./routes/products");
const categories = require("./routes/categories");
const typyicode = require("./routes/typyicode");
const clientsqlz = require("./routes/clientSqlz");

/**
 * Get. to get information. login, checkUser.
 * POST. INSERT
 * PUT. FOR UPDATE.
 * DELETE delete an entity
 */

app.get("/", (req, res)=>{
    res.json({message: "ok from the server side."})
});


app.use("/api/auth/", auth);
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/typyicode", typyicode);
app.use("/api/clientsqlz", clientsqlz);



app.listen(port, () =>{
    console.log(`my app is running on the port ${port}`)
})
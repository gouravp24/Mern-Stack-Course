const express = require("express");
const bodyParser = require("body-parser");
const corcs = require("cors");
const connectMongoDb = require("./config/db");

const userRoutes = require("./routes/user.routes");



const app = express();

const POST=8080;


connectMongoDb();


app.use(corcs());
app.use(express.json());
app.use(bodyParser.json());


app.use('/api',userRoutes);

app.listen(POST, () => {
  console.log(`Server is running on http://localhost:${POST}`);
});

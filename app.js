const express = require('express');
const bodyParser = require('body-parser');
const mongooseConnect = require('./config/db');
const cors = require('cors');
const routes = require('./routes/index');

mongooseConnect();
const app = express();
const port = 2000;



app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log(`App runs on http://localhost:${port}`);
});

/**
 * lib
 */
const express = require('express');
const morgan = require('morgan');
const db = require('./config/db/index');

/**
 * routes
 */
const route = require('./routes/api');

db.connect();

const app = express();
const PORT = 5000;
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


app.use(morgan('combined'));

/**
 * route api
 */
route(app);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
})
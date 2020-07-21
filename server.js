const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(cors());

app.use(bodyParser.json());

app.use(morgan('tiny'));

const apiRouter = require('./server/api');
app.use('/api', apiRouter);


// This conditional is here for testing purposes:
if (!module.parent) { 
  
app.listen(PORT, () => {
  console.log(`Listening for requests at port ${PORT}`);
});
}

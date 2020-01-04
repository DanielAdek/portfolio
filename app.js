const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');
const Routes = require('./emailSender');

config();
const app = express();

/* = ===========
 APP SET PORT
============= */
const port = parseInt(process.env.PORT, 10);
app.set('port', port);

/* = ===========
 APP USE CORS
============= */
app.use(cors());

/* = ==============
  SET BODY PARSER
================== */
const json = bodyParser.json();
const urlencoded = bodyParser.urlencoded({
  extended: true
});
app.use(urlencoded);
app.use(json);

// ROUTES GOES HERE
app.use('/api', Routes);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/**
 * @desc APPLICATION INITIALIZATION
 */
app.listen(app.get('port'), () => {
  if (process.env.NODE_ENV === 'development') {
    const message = '  App is initialized and running on http://localhost:%d in %s mode';

    console.info(message, app.get('port'), app.get('env'));

    console.info('  Press CTRL-C to stop\n');
  }
});


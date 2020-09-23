const conf = require('./config')
const port = conf.PORT;
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}

app.use(ignoreFavicon);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/html'}));

app.use('/vendor/jquery', express.static('./node_modules/jquery/dist/'));
app.use('/vendor/bootstrap/', express.static('./node_modules/bootstrap/dist/'));
app.use('/vendor/fontawesome-free/', express.static('./node_modules/@fortawesome/fontawesome-free/'));
app.use(express.static('public'));

app.use('/auth', routes.auth);
app.use('/items', routes.items);
app.use('/users', routes.users);


app.listen(port, () => {
  console.log("Listening on port: " + port);
});

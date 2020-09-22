const conf = require('./config')
const port = conf.PORT;
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/html'}));
app.use(express.static('public'));

app.use('/users', routes.users);
app.use('/auth', routes.auth);

app.listen(port, () => {
    console.log("Listening on port: " + port);
});

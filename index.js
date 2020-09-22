
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;


app.get("/", (req, res) => {
    res.send('YOLO-SWAG');
});
app.listen(port, () => {
    console.log("Listening on port: " + port);
});
//Q2. Create localhost server using express?

const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000;


app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "app.html"))

})
app.listen(PORT, () => {
    console.log("server running on port" + PORT);
})
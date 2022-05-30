const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4000;
const spaceshipRoutes = require("./routes/spaceship/spaceship.route");
app.use(express.urlencoded({ extended: false }));

app.use("/", spaceshipRoutes);

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
module.exports = { app, server };

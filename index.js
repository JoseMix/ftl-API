const express = require("express");
const app = express();
const spaceshipRoutes = require("./routes/spaceship/spaceship.route");
const port = 3000;
app.use(express.urlencoded({ extended: false }));

app.use("/", spaceshipRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

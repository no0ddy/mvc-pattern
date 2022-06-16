const express = require("express");
const brandRoutes = require("./src/routes/brandRoutes");
const Brands = require("./src/models/brands");
const Patrons = require("./src/models/patrons");
const app = express();
const port = process.env.PORT_ENV || 3000;
const sequelize = require("./src/util/database");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/brands", brandRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`app listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(port, () => console.log(`app listening on port ${port}`));

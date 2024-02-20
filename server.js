const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./mongoDB/index");
const bodyParser = require("body-parser");
const HomeBigArt_routes = require("./routes/HomeBigArt_routes.js");
const HomeRightArt_routes = require("./routes/HomeRightArt_routes.js");
const HomeBottomArt_routes = require("./routes/HomeBottomArt_routes.js");
const HomeArt_routes = require("./routes/HomeArt_routes.js");
const TechNewsArt_routes = require("./routes/TechNewsArt_routes.js");
const PhoneApps_routes = require("./routes/PhoneApps_routes.js");
const PhoneDeals_routes = require("./routes/PhoneDeals_routes.js");
const Search_routes = require("./routes/Search_routes.js");
const contactController = require("./controllers/Contact_Controller.js");

const app = express();
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    methods: ["GET","POST", "PATCH", "UPDATE", "DELETE"],
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;

// routes
app.use("/HomeBigArticle", HomeBigArt_routes);
app.use("/HomeRightArticles", HomeRightArt_routes);
app.use("/HomeBottomArticles", HomeBottomArt_routes);
app.use("/HomeArticles", HomeArt_routes);
app.use("/TechNewsArticles", TechNewsArt_routes);
app.use("/PhoneApps", PhoneApps_routes);
app.use("/DealsArticles", PhoneDeals_routes);
app.use("/search", Search_routes);
app.post("/contact/send", contactController.addMessage);

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});

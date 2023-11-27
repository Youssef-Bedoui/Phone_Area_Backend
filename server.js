const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./mongoDB/index");
const bodyParser = require("body-parser");
const HomeBigArt_routes = require("./routes/HomeBigArt_routes");
const HomeRightArt_routes = require("./routes/HomeRightArt_routes");
const HomeBottomArt_routes = require("./routes/HomeBottomArt_routes");
const HomeArt_routes = require("./routes/HomeArt_routes");
const ReviewsArt_routes = require("./routes/ReviewArt_routes");
const PhoneApps_routes = require("./routes/PhoneApps_routes.js");
const PhoneDeals_routes = require("./routes/PhoneDeals_routes.js");
const Search_routes = require("./routes/Search_routes.js");
const contactController = require("./controllers/Contact_Controller.js")

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PATCH", "UPDATE", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || process.env.HELP_PORT;

// routes
app.use("/HomeBigArticle", HomeBigArt_routes);
app.use("/HomeRightArticles", HomeRightArt_routes);
app.use("/HomeBottomArticles", HomeBottomArt_routes);
app.use("/HomeArticles", HomeArt_routes);
app.use("/ReviewsArticles", ReviewsArt_routes);
app.use("/PhoneApps", PhoneApps_routes);
app.use("/DealsArticles", PhoneDeals_routes);
app.use("/search", Search_routes);
app.post("/contact/send", contactController.addMessage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

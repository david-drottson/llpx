import express from "express";
import compression from "compression";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import LOCATIONS_DATA from "./data/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { locations: LOCATIONS_DATA });
});

app.get("/home", (req, res) => {
  res.render("home", { locations: LOCATIONS_DATA });
});

app.get("/about", (req, res) => {
  res.render("about");
});
``
app.get("/locations/:id", (req, res) => {
  const { id } = req.params;
  const location = LOCATIONS_DATA.find((loc) => loc.id === id);
  
  if (!location) {
    return res.status(404).render("404", { id });
  }
  
  res.render("location", { location });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

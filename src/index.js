import express from "express";
import exphbs  from "express-handlebars";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./database/database.js";
import indexRoutes   from "./routes/credentials.routers.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("views", join(__dirname, "views"));

// Configuring view engine
const hbs = exphbs.create({
  defaultLayout: "template",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));
app.use(indexRoutes);

// Running the server...
app.listen (3000,()  => {
 connectDB();
  console.log("Server running on port", 3000);
});

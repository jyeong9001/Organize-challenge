import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const uploadFiles = multer({ storage });

// Controllers
const getText = (req, res) => {
  fs.readdir("uploads", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    return res.render("home", { fileNameList: data });
  });
};

const postText = (req, res) => {
  const { filename } = req.file;
  return res.redirect(`/read/${filename}`);
};

const showText = (req, res) => {
  const { id } = req.params;
  const path = "uploads/" + id;
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    return res.send(data);
  });
};

//Routers
app.route("/").get(getText).post(uploadFiles.single("text"), postText);
app.get("/read/:id", showText);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
``;

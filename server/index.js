const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;



require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3101;
const DB = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to db succesfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


  const menuSchema = new Schema(
    {
        title: {  type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        image: { type: String, required: true }
    },
     { timestamps: true }
  )

const Menu = mongoose.model("Menu", menuSchema);

// get all
app.get("/menu", async (req, res) => {
  try {
    const menu = await Menu.find({});

    if (menu.length > 0) {
      res.status(200).send({ message: "succes", data: menu });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// post by id
app.post("/menu", async (req, res) => {
    const newMenu = new Menu({ ...req.body });
    try {
        await newMenu.save();
        res.status(201).send({
            message: "posted succesfully",
            data: newMenu,
        }) 
        } catch (error) {
            res.status(500).send({
                message: error.message,
            });
    }
});

// delete by id
app.delete("/menu/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteMenu = await Menu.findByIdAndDelete(id);
        const menu = await Menu.find({});
        res.status(200).json({
            message: "success",
            deleteMenu: deleteMenu,
            allMenu: menu,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


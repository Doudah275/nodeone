const Mydata = require("../models/addcustemeur");
var moment = require("moment");

const aaa = (req, res) => {
  console.log("--------------------------------------------------------");

  Mydata.find()
    .then((result) => {
      //console.log(result);
      res.render("index.ejs", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const bbb = (req, res) => {
  Mydata.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { aaa, bbb };

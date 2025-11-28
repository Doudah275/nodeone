const express = require("express");
const router = express.Router();
const Mydata = require("../models/addcustemeur");
var moment = require("moment");
const userconter = require("../controler/usercontroler");

router.get("/", userconter.aaa);
//////////////////////////////////////////////////////////////////////////////
router.get("/user/add.html", (req, res) => {
  res.render("user/add.ejs");
});
/////////////////////////////////////////////////////////////////////////////
router.get("/edit/:id", userconter.bbb);
//////////////////////////////////////////////////////////////////////////
router.get("/view/:id", (req, res) => {
  Mydata.findById(req.params.id)
    .then((result) => {
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});
//////////////////////////////////////////////////////////////////////////////////
router.post("/user/add.html", (req, res) => {
  Mydata.create(req.body)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

////////////////////////////////////////////////////////////////
router.post("/search", (req, res) => {
  const searchi = req.body.searchhhh.trim();
  Mydata.find({ $or: [{ firstname: searchi }, { lastname: searchi }] })
    .then((result) => {
      console.log();
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});
/////////////////////////////////////////////////////////////////////
router.delete("/edit/:id", (req, res) => {
  Mydata.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});
///////////////////////////////////////////////////////////////
router.put("/edit/:id", (req, res) => {
  Mydata.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch(() => {
      console.log(err);
    });
});
////////////////////////////////////////////////////////////////////

module.exports = router;

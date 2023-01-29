const category = require("../model/category");

let util = require("util");
const exec = util.promisify(require("child_process").exec);

exports.getOneCat = async (req, res) => {
  try {
    let foundCat = await category.findById(req.params.id);
    res.json(foundCat);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.deleteCat = async (req, res) => {
  try {
    let deletedCat = await cat.findByIdAndDelete(req.params.id);
    res.json(deletedCat);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.newCat = async (req, res) => {
  try {
    let catDraft = new category(req.body);

    let postedCat = await catDraft.save();

    res.json(postedCat);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};
exports.editCat = async (req, res) => {
  try {
    let updatedCat = await category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedCat);
  } catch (err) {
    console.log(err);

    res.status(409).json("There was an error please try again later");

    res.json("err");
  }
};
exports.getCats = async (req, res) => {
  try {
    let foundCat = await category.find();
    res.json(foundCat);
  } catch (err) {
    console.log(err);
    res.status(409).json("There was an error please try again later");
  }
};

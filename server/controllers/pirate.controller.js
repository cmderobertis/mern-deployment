const Pirate = require("../models/pirate.model")

module.exports = {
  index: (req, res) => {
    res.json({
      message: "Hello World!",
    })
  },
  createPirate: (req, res) => {
    Pirate.create(req.body)
      .then((pirate) => res.json(pirate))
      .catch((err) => {
        res.status(400).json(err)
        err.message
      })
  },
  getAllPirates: (req, res) => {
    Pirate.find({}, null, { sort: "name" })
      .then((pirates) => res.json(pirates))
      .catch((err) => res.status(400).json(err))
  },
  getPirate: (req, res) => {
    Pirate.findOne({ _id: req.params.id })
      .then((pirate) => res.json(pirate))
      .catch((err) => res.status(400).json(err))
  },
  updatePirate: (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedPirate) => res.json(updatedPirate))
      .catch((err) => res.status(400).json(err))
  },
  deletePirate: (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.status(400).json(err))
  },
}

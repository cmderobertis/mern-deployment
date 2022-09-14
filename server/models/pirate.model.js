const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const PirateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: "Title taken",
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    chests: {
      type: Number,
      required: [true, "Number of chests is required"],
    },
    catchPhrase: {
      type: String,
      required: [true, "Catch phrase is required"],
    },
    position: {
      type: String,
      required: [true, "Position is required"],
    },
    pegLeg: Boolean,
    eyePatch: Boolean,
    hookHand: Boolean,
  },
  { timestamps: true }
)
PirateSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Pirate", PirateSchema)

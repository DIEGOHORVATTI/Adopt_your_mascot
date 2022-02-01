const mongoose = require("../db/conn")
const { Schema } = mongoose

const Pet = mongoose.model(
  'Pet',
  new Schema(
    {
      name: {
      type: String,
      required
      },
        age: {
        type: Number,
        required
      },
      weigh:{
        type: Number,
        required: true
      },
      color: {
        type: String,
        required
      },
      imagens:{
        type: Array,
        required: true
      },
      available:{
        type: Boolean
      },
      user: Object,
      adopter: Object
    },
    {
      timestamps: true
    }
  ),
)

module.exports = Pet
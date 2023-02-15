const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Admin",
    },
    emotion: {
      type: String,
      required: [true, "Please add a text value"],
    },
    quotes: [
      {
        title: {
          type: String,
          required: [true, "Please add a text value"],
        },
        subtitle: {
          type: String,
          required: [true, "Please add a text value"],
        },
        imageUrl: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);

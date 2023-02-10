const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Admin'
    },
    emotion: {
        type: String,
        required: true,
      },
      quotes: [
        {
          title: {
            type: String,
            required: true,
          },
          subtitle: {
            type: String,
          },
          imageUrl: {
            type: String,
          },
        },
      ],
})

module.exports = mongoose.model('Card', cardSchema)
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'usersmodels'
  },
  products: [{
    productId: String,
    quantity: Number,
    name: String,
    price: Number
  }],
  active: {
    type: Boolean,
    default: true
  },
  modifiedOn: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('cartModels', Schema);

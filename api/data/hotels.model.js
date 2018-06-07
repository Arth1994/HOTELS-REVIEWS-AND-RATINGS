var mongoose = require('mongoose');

var mongooseUniqueValidator = require('mongoose-unique-validator');

var reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0
    },
    review: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    },
}, {
    usePushEach: true
});

var roomSchema = new mongoose.Schema({
    type: String,
    number: Number,
    description: String,
    photos: [String],
    price: Number
}, {
    usePushEach: true
});

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0
    },
    services: [String],
    description: String,
    photos: [String],
    currency: [String],
    reviews: [reviewSchema],
    rooms: [roomSchema],
    location: {
        address: String,
        // Long {E/W} Lat {N/S}
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    }
});


reviewSchema.plugin(mongooseUniqueValidator);
roomSchema.plugin(mongooseUniqueValidator);
hotelSchema.plugin(mongooseUniqueValidator);

mongoose.model('Hotel', hotelSchema);
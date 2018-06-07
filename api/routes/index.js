var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers');
var ctrlReviews = require('../controllers/reviews.controllers');
var ctrlUsers = require('../controllers/users.controllers.js');

//Hotel Routes
router.route('/hotels').get(ctrlHotels.hotelsGetAll).post(ctrlHotels.hotelsAddOne);

router.route('/hotels/:hotelId').get(ctrlHotels.hotelsGetOne).put(ctrlHotels.hotelsUpdateOne).delete(ctrlHotels.hotelsDeleteOne);

//Review Routes
router.route('/hotels/:hotelId/reviews').get(ctrlReviews.reviewsGetAll).post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);

router.route('/hotels/:hotelId/reviews/:reviewId').get(ctrlReviews.reviewsGetOne).put(ctrlReviews.reviewsUpdateOne).delete(ctrlReviews.reviewsdeleteOne);

router.route('/users/register').post(ctrlUsers.register);

router.route('/users/login').post(ctrlUsers.login);

module.exports = router;
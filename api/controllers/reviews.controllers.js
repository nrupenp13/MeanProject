var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

module.exports.reviewsGetAll = function(req, res) {
  var id = req.params.hotelId;
  console.log('GET hotelId', id);
  // it uses _id to query the db
  Hotel
    .findById(id)
    .select('reviews')
    .exec(function(err, hotel) {
      console.log(hotel);
      res
        .status(200)
        .json(hotel.reviews);
    });
};



module.exports.reviewsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var reviewId = req.params.reviewId;
  console.log('GET hotelId', hotelId);
  console.log('GET reviewId', reviewId);
  // it uses _id to query the db
  Hotel
    .findById(hotelId)
    .select('reviews')
    .exec(function(err, hotel) {
      //console.log('Returned Hotel' , JSON.stringify(hotel));
      var review = hotel.reviews.id(reviewId);
      console.log('The name of the review is', review.name);
      res
        .status(200)
        .json(review);
    });
};

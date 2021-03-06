// var apiKey = require('./../.env').apiKey;

function BikeTracker() {

}

BikeTracker.prototype.getBikes = function(location, getCount) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location='+location+'&distance=10&stolenness=stolen').then(function(response) {
      getCount(location, response.proximity);
      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.seattle-bikes').text(error.responseJSON.message);
    });
  };

  BikeTracker.prototype.getBikesByCity = function(city, getBikeStats) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location='+city+'&distance=10&stolenness=proximity').then(function(response) {

      response.bikes.forEach(function(bike) {
        getBikeStats(city, bike);
        console.log(bike);
      });

    }).fail(function(error) {
      $('.city-results').text(error.responseJSON.message);
    });
  };

// BikeTracker.prototype.getBikesByCity = function(city, getBikeStats) {
//   $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location='+city+'&distance=10&stolenness=proximity&access_token='+apiKey).then(function(response) {
//
//     response.bikes.forEach(function(bike) {
//       getBikeStats(city, bike);
//       console.log(bike);
//     });
//
//   }).fail(function(error) {
//     $('.city-results').text(error.responseJSON.message);
//   });
// };


exports.bikeModule = BikeTracker;

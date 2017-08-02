var apiKey = require('./../.env').apiKey;

function BikeTracker() {

}

BikeTracker.prototype.getBikes = function(location, getCount) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location='+location+'&distance=10&stolenness=stolen&access_token='+apiKey).then(function(response) {
      getCount(location, response.proximity);
      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.seattle-bikes').text(error.responseJSON.message);
    });
  };


exports.bikeModule = BikeTracker;

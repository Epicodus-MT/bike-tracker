var BikeTracker = require('./../js/bike-tracker.js').bikeModule;

var getCount = function(location, count) {
  $('#seattle-bikes').text(count);
};

var getBikeStats = function(city, listing) {
  // listings.forEach(function(element) {
    $('#stolen-list').append('<li>'+listing.title+', Serial#: '+listing.serial+', Date Stolen: '+listing.date_stolen+ '</li>');
  // });
};

var convertDate = function(time) {
  var year = 1970;
  var month = 0;
  var day = 0;

  while (time % 31556926) {
    year++;
    time -= 31556926;
  }
  while (time % 2629743) {
    month++;
    time -= 2629743;
  }
  while (time % 86400) {
    day++;
    time -= 86400;
  }
  var stolenDate = month+"/"+day+"/"+year;
  return stolenDate;
};

$(document).ready(function() {
  var newBikeTracker = new BikeTracker();
  var location = "Seattle";
  newBikeTracker.getBikes(location, getCount);

  $('#city-form').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $('#city').empty();
    newBikeTracker.getBikesByCity(city, getBikeStats);
  });

});

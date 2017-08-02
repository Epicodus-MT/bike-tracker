var BikeTracker = require('./../js/bike-tracker.js').bikeModule;

var getCount = function(location, count) {
  $('#seattle-bikes').text(count);
};

var getBikeStats = function(city, listing) {
  // listings.forEach(function(element) {
    $('#bike-title').append('<li>'+listing.title+'</li>');
    $('#serial').append('<li>'+listing.serial+'</li>');
    $('#stolen-date').append('<li>'+convertDate(listing.date_stolen)+'</li>');

    // , Serial#: '+listing.serial+', 'Date Stolen: '+convertDate(listing.date_stolen)+ '</li>');
  // });
};

var convertDate = function(time) {
  var year = 1970;
  var month = 1;
  var day = 1;

  while (time - 31556926 >= 0) {
    year++;
    time -= 31556926;
  }
  while (time - 2629743 >= 0) {
    month++;
    time -= 2629743;
  }
  while (time - 86400 >= 0) {
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

var app = angular.module('BipApp', ['ngMaterial']);

app.controller('BipCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}]);

angular.module('inputProfile', ['ngMaterial', 'ngMessages'])
app.controller('BipCtrl', function($scope) {
  $scope.user = {
    email: 'bender@gmail.com',
    phone: '+912769921',
    firstName: 'Bender',
    lastName: 'Rodríguez',
    company: 'Langley Mall',
    address: '1600 Amphitheatre Pkwy',
    city: 'Atlanta City',
    state: 'Georgia',
    country: 'Unated States of America',
    bio: 'Bender Bending Rodríguez, Sr., designated Bending Unit 22 and known as Bender, is one of the main characters in Futurama. He was made in Tijuana, serial number 2716057, Mexico in 2996.[1]',
    postalCode: '94043'
  };
});

angular.module('BipApp')

.controller('ListCtrl', function($scope, $mdDialog) {
  $scope.toppings = [{
      name: 'Show my location',
      wanted: true
    }, {
      name: 'Show my bips',
      wanted: false
    }, {
      name: 'Show my history',
      wanted: true
    }, {
      name: 'Notify me when bips ready to complete',
      wanted: false
    },{
    name: 'Notify me when ready to checkout',
    wanted: true
    },{
    name: 'Notify me about new message',
    wanted: true
    }];
  
    $scope.settings = [
    { name: 'Diactivate my account',
     enabled: true
    }];
  
  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.body))
      .title('Would you like to close your account?')
      .content('All your information in Biptik servise will be delete.')
      .ariaLabel('Close account')
      .ok('Close account')
      .cancel('Cancel')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to close your account.';
    }, function() {
      $scope.alert = 'You decided to keep your account.';
    });
  };
});

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initialize() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
      { types: ['geocode'] });
  // When the user selects an address from the dropdown,
  // populate the address fields in the form.
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });
}

// [START region_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}


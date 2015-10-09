angular.module('nemmus').controller('HomeCtrl', ['$scope', '$cordovaDeviceMotion', function($scope, $cordovaDeviceMotion) {
  
  var options = { frequency: 10 };
  
  $scope.hej = ["Bøvle", "Mark", "Søren"];

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.X = result.x;
        $scope.Y = result.y;
        $scope.Z = result.z;
        $scope.timeStamp = result.timestamp;
    });


    watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });

  }, false);
}]);

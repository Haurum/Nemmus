angular.module('nemmus').controller('HomeCtrl', ['$scope', '$cordovaDeviceMotion', function($scope, $cordovaDeviceMotion) {
  
  var options = { frequency: 50 };
  
  
  
  document.addEventListener("deviceready", function () {
    $scope.watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        /*$scope.X = result.x;
        $scope.Y = result.y;
        $scope.Z = result.z;
        $scope.timestamp = result.timestamp;*/
    });


    /*watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });*/

  }, false);
  
  $scope.data = [[]];
  $scope.labels = [];
  $scope.time = 0;
  
  $scope.recordMovement = function()
  {
    
    $scope.watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function() {
        $scope.data[index].push(result.x);
        $scope.labels.push($scope.time);
        $scope.time++;
        
    });
  }
  
  $scope.createBaseline = function()
  {
    $scope.gnsData = [];
    $scope.watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function() {
        $scope.gnsData.push(result.x);      
    });
    setTimeout(function(){
      $scope.stopMovement();
      $scope.gns = getAvg($scope.gnsData);
      
    }, 5000);
    
  }
  
  function getAvg(moves) {
    return moves.reduce(function (p, c) {
      return p + c;
    }) / moves.length;
  }
  
  $scope.stopMovement = function()
  {
    $scope.watch.clearWatch();
  }
  
  $scope.series = ['Moves'];
  
  /*$scope.showTable = function()
  {
    $scope.data = $scope.moves;
  }*/
  
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
  
  
}]);

angular.module('nemmus').controller('TardCtrl', ['$scope', '$cordovaDeviceMotion', function ($scope, $cordovaDeviceMotion) {


}]);


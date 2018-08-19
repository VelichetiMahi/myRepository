(function() {
    'use strict';
    angular.module("myApp", []).controller("myController", myController);
    myController.$inject = ['$scope'];

    function myController($scope) {
      $scope.check = function() {
        if (!$scope.menu || $scope.menu.length === 0) {
          $scope.msg = "Please Enter Data First";
        } else {
          var b = $scope.menu.split(',');
          $scope.abc = b;
          var len = b.length;
          if (b[len - 1] === '') {
            len = len - 1;
            $scope.len = len;
          }
          if (len <= 3) {
            $scope.msg = "Enjoy";
          } else {
            $scope.msg = "Too Much!!!";
          }
        }
      };
    }
})();

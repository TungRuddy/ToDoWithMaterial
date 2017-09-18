angular.module('BlankApp',['ngMaterial','ngMessages', 'material.svgAssetsCache']);
var app = angular.module('app',['ngMaterial'])
app.controller('myCtrl', ['$scope', function ($scope,$mdToast) {
   
    //code tu'
    var times = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "0:00", ];
    $scope.times = times;
    var todos = [
        {
            name: 'Get up',
            myDate: '12-01-2017',
            time: '6:00',
            nameClass: '',
            stt:'chưa xong'
        }
    ];
    $scope.todos = todos;
    $scope.save = function () {
        if ($scope.name && $scope.time) {
            $scope.todos.push(
                { name: $scope.name,myDate: $scope.myDate, time: $scope.time, stt: 'chưa xong' }
                );
        }
    }

    $scope.delete = function (index) {
        $scope.todos.splice(index, 1);
        $scope.showSimpleToast();
    }

    $scope.complete = function (index,event) {
        console.log("abc"); 
        $scope.todos[index].nameClass = 'complete';
        $scope.todos[index].stt = 'xong';
       
    }

//popup
var last = {
    bottom: true,
    top: false,
    left: false,
    right: true
  };
  $scope.toastPosition = angular.extend({},last);
  
    $scope.getToastPosition = function() {
      sanitizePosition();
  
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };
  
    function sanitizePosition() {
      var current = $scope.toastPosition;
  
      if ( current.bottom && last.top ) current.top = false;
      if ( current.top && last.bottom ) current.bottom = false;
      if ( current.right && last.left ) current.left = false;
      if ( current.left && last.right ) current.right = false;
  
      last = angular.extend({},current);
    }
  
    $scope.showSimpleToast = function() {
      var pinTo = $scope.getToastPosition();
  
      $mdToast.show(
        $mdToast.simple()
          .textContent('Đã xóa')
          .position(pinTo )
          .hideDelay(2000)
      );
    }
  




}])

;

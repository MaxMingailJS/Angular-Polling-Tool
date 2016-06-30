var app = angular.module('polls', []);
app.controller('pollsCtrl', function($scope){
  $scope.pollList = [{name: 'Do you like pizza?', yes: 0, no: 0, done: false}];  
  $scope.add = function() {
    $scope.pollList.push({name: $scope.nameInput, yes: 0, no: 0, done: false});
    $scope.nameInput = "";
  };
  $scope.yes = function(name) {
   for(var i = 0; i < $scope.pollList.length; i++) {
     var match = $scope.pollList[i].name;
     if (match === name) {
       var original = $scope.pollList[i].yes;
       delete $scope.pollList[i].yes;
       var updated = original + 1;
       $scope.pollList[i].yes = updated;
     };
   };
  };
  $scope.no = function(name) {
   for(var i = 0; i < $scope.pollList.length; i++) {
     var match = $scope.pollList[i].name;
     if (match === name) {
       var original = $scope.pollList[i].no;
       delete $scope.pollList[i].no;
       var updated = original + 1;
       $scope.pollList[i].no = updated;
     };
   };
  };
});

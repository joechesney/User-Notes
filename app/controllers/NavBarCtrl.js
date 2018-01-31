"use strict";

angular.module("UserNotesApp")
.controller("NavBarCtrl", function($scope){
  $scope.thisUserRightHere = firebase.auth().currentUser.uid;

  
});
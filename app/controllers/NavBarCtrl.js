"use strict";

angular.module("UserNotesApp")
.controller("NavBarCtrl", function($scope, authFactory, $location){
  $scope.thisUserRightHere = authFactory.getUser();
  $scope.logout = () =>{
    console.log('you are logged out');
    authFactory.logoutUser();
    $location.url('/auth');
  };
  
});
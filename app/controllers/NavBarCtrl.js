"use strict";

angular.module("UserNotesApp")
.controller("NavBarCtrl", function($scope, authFactory){
  $scope.thisUserRightHere = authFactory.getUser();
  let logout = () =>{
    authFactory.logoutUser();
  };
  
});
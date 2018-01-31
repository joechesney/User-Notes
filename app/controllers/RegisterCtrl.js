"use strict";

angular.module("UserNotesApp")
.controller("RegisterCtrl", function($scope, authFactory, $location){
  $scope.title = "Please Register";


  $scope.register = () =>{
    authFactory.registerUser($scope.account)
    .then( (user) =>{
      console.log('newUser',user);
      authFactory.getUser();
      $location.url("/login");
      authFactory.loginUser($scope.account);
    })
    .catch( error=>{
      console.log('errrorq',error);
    });
  };
  
});
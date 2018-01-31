"use strict";

angular.module("UserNotesApp")
.controller("RegisterCtrl", function($scope, authFactory){
  $scope.title = "Please Register";


  $scope.register = () =>{
    authFactory.createUser($scope.account)
    .then( (user) =>{
      console.log('newUser',user);
      $scope.login();
    })
    .catch( error=>{
      console.log('errrorq',error);
    });
  };
  
});
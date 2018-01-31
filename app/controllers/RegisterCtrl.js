"use strict";

angular.module("UserNotesApp")
.controller("RegisterCtrl", function($scope, authFactory, $window, $location){
  $scope.title = "Please Register";

  $scope.account = {};
  $scope.register = (account) =>{
    authFactory.registerUser($scope.account)
    .then( (user) =>{
      $window.location.url("/noteList");
      console.log('newUser',user);
      // authFactory.getUser();
      authFactory.loginUser(user)
      .then( someData =>{
        // $location.url("/noteList");
        console.log('should have redicrected by now');

      });
    })
    .catch( error=>{
      console.log('errrorq',error);
    });
  };
  
  // $scope.registerUser = function(registerNewUser) {
  //   AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister) {
  //     console.log(didRegister);
  //   });
  // };
});
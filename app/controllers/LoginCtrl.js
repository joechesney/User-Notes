"use strict";

angular.module("UserNotesApp")
.controller("LoginCtrl", function($scope, authFactory, $window){
$scope.title = "Please Login";



$scope.login = ()=>{
  authFactory.loginUser($scope.account).then(user=>{
    console.log('logged in user: ',user);
    $window.location.href = "#!/items/list";
  });
};
});
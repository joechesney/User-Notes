"use strict";

angular.module("UserNotesApp", ["ngRoute"])
.config(($routeProvider)=>{
  // TODO: add routing
  $routeProvider
  .when("/login", {
    templateUrl:"partials/login.html",
    controller:"LoginCtrl"
  })
  .when("/notes", {
    templateUrl:"partials/noteList.html",
    controller:"ItemListCtrl"
  })
  .when("/register", {
    templateUrl:"partials/register.html",
    controller:"RegisterCtrl"
  })
  .when("/newnote", {
    templateUrl:"partials/newNote.html",
    controller:"NewNoteCtrl"
  });

})
.run(FBCreds =>{
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain
  };
    firebase.initializeApp(authConfig);
});


"use strict";

let isAuth = (authFactory) => new Promise ((resolve, reject) => {
  if(authFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

angular.module("UserNotesApp", ["ngRoute"])
.constant("FBUrl", "https://testetization.firebaseio.com")
.config(($routeProvider)=>{
  // TODO: add routing
  $routeProvider
  .when("/register", {
    templateUrl:"partials/register.html",
    controller:"RegisterCtrl"
  })
  .when("/login", {
    templateUrl:"partials/login.html",
    controller:"LoginCtrl"
  })
  .when("/noteList", {
    templateUrl:"partials/noteList.html",
    controller:"ItemListCtrl",
    resolve: {isAuth}
  })
  .when("/newNote", {
    templateUrl:"partials/newNote.html",
    controller:"NewNoteCtrl",
    resolve: {isAuth}
  })
  .otherwise("/login")
  ;

  // when a user is logged in, they will be able to see thet button anchors that 
  // allow them to add a new note and view their note list
  // if not logged in, they will not be able to see these buttons

  // When a user logs in, or is automatically logged in, it will take them to their note list
})
.run(FBCreds =>{
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain
  };
    firebase.initializeApp(authConfig);
});


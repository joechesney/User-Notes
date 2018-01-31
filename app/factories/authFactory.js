"use strict";


angular.module("UserNotesApp")
.factory("authFactory", function(FBCreds){

  const registerUser = function({email, password}){
      return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    };

  const loginUser = ({email, password})=>{
    return firebase.auth()
    .signInWithEmailAndPassword(email, password);
  };

  return { registerUser, loginUser };
});
"use strict";


angular.module("UserNotesApp")
.factory("authFactory", function(FBCreds){

  let getUser = () => {
    return firebase.auth().currentUser;
  };

  const registerUser = function({email, password}){
      return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    };

  const loginUser = ({email, password})=>{
    return firebase.auth()
    .signInWithEmailAndPassword(email, password);
  };

  let isAuthenticated = () => {
    return firebase.auth().currentUser ? true : false;
  };

  let logoutUser = () => {
    firebase.auth().signOut();
  };

  return { registerUser, loginUser, getUser, isAuthenticated, logoutUser };
});
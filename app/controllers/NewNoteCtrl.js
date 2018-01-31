"use strict";

angular.module("UserNotesApp")
.controller("NewNoteCtrl", function($scope, noteFactory, $location){

  $scope.saveNewNote = () =>{
    $scope.note.uid = firebase.auth().currentUser.uid;
    noteFactory.saveNewNoteToFB($scope.note)
    // .then(data=>{

      // noteFactory.getNotesFromFB()
      .then(allnotes=>{
        console.log('allnotes',allnotes);
        $location.url("/noteList");
      // });
    });
  };
  
});
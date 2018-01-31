"use strict";

angular.module("UserNotesApp")
.controller("ItemListCtrl", function($scope, noteFactory){
  $scope.title = "Your notes, my dude.";

  
  
  noteFactory.getNotesFromFB()
  .then((notes)=>{
    console.log('dataaaa',notes);
    if(notes !== null && notes !== undefined){
      $scope.noteList = Object.keys(notes).map(key => {
        // notes[key].FBid = key;
        return notes[key];
      });
    }else{
      $scope.message = "You need some notes, my dude.";
    }
    console.log('scopeitems',  $scope.noteList);
  });

});
"use strict";


angular.module("UserNotesApp")
.factory("noteFactory", function(FBUrl, $q, $http){
  // function that sends 'note' to FB with user id and note.body


  // function that GETs the notes from firebase, and 
  // assigns $scope.noteList to the list of notes, after converting it to an array?

  //$http.get(`${FBUrl}/items.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)


  function getNotesFromFB(){
    return $q((resolve,reject)=>{
      $http.get(`${FBUrl}/notes.json`)
      .then(({data})=>{
        // Object.keys(data.data).map(key => {
        //   data.data[key].FBid = key;
        // });
        console.log('data in factry',data);
        resolve(data);
      });
    });
  }

  return { getNotesFromFB };
});
var app = angular.module('tutorial1', ['firebase']);
app.run(function(){
  var config = {
    apiKey: "AIzaSyCe3-c0x2vMr8RSKNVZjesRaTP7bJMCLo8",
    authDomain: "solecode.firebaseapp.com",
    databaseURL: "https://solecode.firebaseio.com",
    storageBucket: "firebase-solecode.appspot.com",
    messagingSenderId: "276329159586"
  };
  firebase.initializeApp(config);
});

app.controller('ctrl1', function($scope, $firebaseObject){
  $scope.title = 'hello world';
  var ref = firebase.database().ref();
  $scope.data = $firebaseObject(ref.child('data1'));


})

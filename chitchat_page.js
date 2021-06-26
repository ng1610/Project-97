var firebaseConfig = {
    apiKey: "AIzaSyCHn62aprkj2CPpUAY9Lne4lge_N5JuygY",
    authDomain: "chitchat-67bde.firebaseapp.com",
    databaseURL: "https://chitchat-67bde-default-rtdb.firebaseio.com",
    projectId: "chitchat-67bde",
    storageBucket: "chitchat-67bde.appspot.com",
    messagingSenderId: "788598319431",
    appId: "1:788598319431:web:69bb6b7fb633c77324c462",
    measurementId: "G-4120FVXLS1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          like:0,
          user_name: user_name,
          message:msg
      });
      document.getElementById("msg").value="";
  }
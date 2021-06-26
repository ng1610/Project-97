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

  username=localStorage.getItem("user name");
  document.getElementById("user_name").innerHTML="Welcome " + username;

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location= "chitchat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room_names", Room_names);
 row= "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML+= row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location= "chitchat_page.html";
}
function LogOut(){
  localStorage.removeItem("user name");
  localStorage.removeItem("room_name");
  window.location="chitchat.html";

}
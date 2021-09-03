
 var firebaseConfig = {
      apiKey: "AIzaSyBSNoLvNSwSJn372OvV1aFhyDnJG25CRrw",
      authDomain: "kwitter-123a6.firebaseapp.com",
      databaseURL: "https://kwitter-123a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-123a6",
      storageBucket: "kwitter-123a6.appspot.com",
      messagingSenderId: "96650884624",
      appId: "1:96650884624:web:cde2d26be1959068a13c95",
      measurementId: "G-WMD9PWCPP9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("KwitUser");
    document.getElementById("User_name").innerHTML = "Welcome " + username; 

    function addRoom(){
          room_name = document.getElementById("KwitRoom").value;
          firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
          localStorage.setItem("KwitRoom",room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Roomname " + Room_names);
       row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML = row;
      

      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logOut(){
      localStorage.removeItem("KwitUser");
      localStorage.removeItem("KwitRoom");
      window.location = "index.html";
}


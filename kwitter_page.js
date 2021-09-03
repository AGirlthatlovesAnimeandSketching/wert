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
  roomname = localStorage.getItem("KwitRoom");

  function Sent(){
       
    message = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name : username,
        msg : message,
        like : 0,
    });
    document.getElementById("msg").value = "";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
   
    name = message_data["name"];
    message = message_data["message"];
    like = message_data["like"];

    name_with_tag = "<h4>" + name + "<img class='user_tick' src="tick.png"></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_btn = "<button class='btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick='update_like(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumps-up'> like:"+like+"></span></button> <hr>";
    
    row = name_with_tag + message_with_tag + like_btn + span_with_tag;
    document.getElementById("output").innerHTML = row;
  }
});
});
  }

  getData();

  function update_like(message_id){
    console.log("click on the like button - "+ message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({like:update_likes});
    
  }

  function logOut(){
    localStorage.removeItem("KwitUser");
    localStorage.removeItem("KwitRoom");
    window.location = "index.html";
}



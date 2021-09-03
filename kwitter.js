function addUser(){
    username = document.getElementById("KwitUser").value;

    localStorage.setItem("KwitUser", username);

    window.location = "kwitter_room.html";

}
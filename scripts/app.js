
src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"


src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js" 
  
// Your web app's Firebase configuration

    var firebaseConfig = {
    apiKey: "AIzaSyBcFkBVi6ocla_IMQbYFlCDTfnkW3pfPWQ",
    authDomain: "goal-track-89828.firebaseapp.com",
    databaseURL: "https://goal-track-89828.firebaseio.com",
    projectId: "goal-track-89828",
    storageBucket: "goal-track-89828.appspot.com",
    messagingSenderId: "517108760638",
    appId: "1:517108760638:web:e01a74553ecb5432d8516f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    db.collection("Users").doc("vkubliy").set({
        name: "Vlad",
        message:"Hello",
        
    })
    .then(function(){
        console.log("Added record");
    })
        .catch(function(error) {
        console.log("Something went wrong");
    });

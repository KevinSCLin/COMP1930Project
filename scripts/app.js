
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
    let db = firebase.firestore();

    // db.collection("Users").doc("vkubliy").set({
    //     name: "Vlad",
    //     message:"Hello",
        
    // })
    // .then(function(){
    //     console.log("Added record");
    // })
    //     .catch(function(error) {
    //     console.log("Something went wrong");
    // }, {merge: true});

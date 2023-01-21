var firebaseConfig = {
    apiKey: "AIzaSyAtDgpir9s_gJL5Loe168J6j-MhzWGSEW4",
    authDomain: "practice-ed5f2.firebaseapp.com",
    databaseURL: "https://practice-ed5f2-default-rtdb.firebaseio.com",
    projectId: "practice-ed5f2",
    storageBucket: "practice-ed5f2.appspot.com",
    messagingSenderId: "100938394130",
    appId: "1:100938394130:web:e7c90d53094f081bc606cb"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
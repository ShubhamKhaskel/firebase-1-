//FIREBASE

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIrUgvSIJ_9wsuHMLRp0S7RBtxSygj4-0",
  authDomain: "formlogin-1ace1.firebaseapp.com",
  projectId: "formlogin-1ace1",
  storageBucket: "formlogin-1ace1.appspot.com",
  messagingSenderId: "35714191921",
  appId: "1:35714191921:web:4f7a04b7336a6d9e1efb10"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('reg-btn').addEventListener('click',function(){
    
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
    //alert("welcome");
});

document.getElementById('log-btn').addEventListener('click',function(){
    
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
    //alert("welcome");
});




document.getElementById("login-btn").addEventListener('click',function(){
   // alert("der laura");
   
const loginEmail=document.getElementById("login-email").value;
const loginPassword=document.getElementById("login-password").value;

//console.log(loginEmail,loginPassword);

signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Welcome Back<br>"+loginEmail+"was Logged in Succesfully!";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;

  });

});
  /////////////////////////////////////

  document.getElementById("register-btn").addEventListener('click',function(){
    // alert("der laura");
    
 const registerEmail=document.getElementById("register-email").value;
 const registerPassword=document.getElementById("register-password").value;
 
 //console.log(loginEmail,loginPassword);
 
 createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     document.getElementById('result-box').style.display="inline";
     document.getElementById('register-div').style.display="none";
     document.getElementById('result').innerHTML="Welcome!!!<br>"+registerEmail+"was registered Succesfully!";
 
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     document.getElementById('result-box').style.display="inline";
     document.getElementById('register-div').style.display="none";
     document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;
 
   });
 
 });



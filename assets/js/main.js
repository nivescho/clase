import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from "./firebase/firebase.js"

import { loginCheck } from "./firebase/login_check.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import './firebase/signup_form.js';
import './firebase/logout.js';
import './firebase/signin_form.js';
import './firebase/google_login.js';

await signOut(auth);

onAuthStateChanged(auth,async(user)=>
{
      if (user) {
            loginCheck(user);
      }


      //si a salido 
      else{
            loginCheck(user);
      }
});
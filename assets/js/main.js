import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from "./firebase/firebase.js"

import { loginCheck } from "./firebase/login_check.js";
import './firebase/signup_form.js';
import './firebase/logout.js';
import './firebase/signin_form.js';
import './firebase/google_login.js';


onAuthStateChanged(auth,async(user)=>

{

      //si e ingresado
      if (user){
            loginCheck(user);
            console.log(user);
            import ("./firebase/setup_task.js").then(({default:setupTask})=>  setupTask(user));

      }


      //si a salido 
      else{
            loginCheck(user);

      }

  

});
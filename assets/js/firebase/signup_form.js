const signupForm = document.getElementById('signup-form');
console.log(signupForm);
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";
signupForm.addEventListener('submit' , async (e)=>{
      //para prevenir que la pagina recargue 
      e.preventDefault();
      const email = signupForm['email-signup'].value;
      const password = signupForm['password-signup'].value;
      console.log(email,password);
      try{
      const credentials = await createUserWithEmailAndPassword(auth,email,password);
      console.log(credentials);
      const signupModal=document.getElementById('signup-modal');
      const modal = bootstrap.Modal.getInstance (signupModal);
      signupForm.reset();
      modal.hide();
      }
      catch (error) {
            console.log(error)
            if (error .code ==='auth/email-already-in-use'){
                  
                  showMessage('Email Already in use ', 'red');
            }
            else if (error .code ==='auth/invalid email','red'){
                  showMessage('Invalid Email ');
            }
            else if (error .code ==='auth/weak password','red'){
                  showMessage('Weak Password ');
            
            }
            else  {
                  showMessage('Something went wrong','red');

            }
      }
      setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000);

});
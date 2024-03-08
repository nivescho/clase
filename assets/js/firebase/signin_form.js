import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";
const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const email = signinForm['email-signin'].value;
      const password = signinForm['password-signin'].value;
      try{
            const credentials = await  signInWithEmailAndPassword  (auth,email,password);
            console.log(credentials);
      
            
            const signinModal=document.getElementById('signin-modal');
            const modal = bootstrap.Modal.getInstance (signinModal);
           
            signinForm.reset();
            modal.hide();
      }
      
            catch (error) {
      

                  console.log(error)
            }
              setTimeout(() => {
                  window.location.href = "index2.html";
              }, 2000);


})

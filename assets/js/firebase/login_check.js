import { showMessage } from "./show_message.js";

const loggedOutLinks=document.querySelectorAll('.logged-out');
const loggedInLinks=document.querySelectorAll('.logged-in');


export const loginCheck = user =>{
      //si el usario existe ocultamos los botones necesarios
      if(user){
            loggedInLinks.forEach(link=>link.style.display='block');
            loggedOutLinks.forEach(link=>link.style.display='none');
            showMessage('Loged in','green');

      }

      else{
            loggedInLinks.forEach(link=>link.style.display='none');
            loggedOutLinks.forEach(link=>link.style.display='block');
            showMessage('Loged Out','orange');
      }
}

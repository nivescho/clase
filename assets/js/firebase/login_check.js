const loggedOutLinks=document.querySelector('.logged-out');
const loggedInLinks=document.querySelector('.logged-in');


export const LoginCheck = user=>{
      //si el usario existe ocultamos los botones necesarios
      if(user){
            loggedInLinks.forEach(link=>link.style.display='block');
            loggedOutLinks.forEach(link=>link.style.display='none');

      }


      else{
            loggedInLinks.forEach(link=>link.style.display='none');
            loggedOutLinks.forEach(link=>link.style.display='block');

      }
}

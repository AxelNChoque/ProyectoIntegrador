let validate = (input) => {
    let error = {};
   if(!input.email){
       error.mail='Ingresar un email';
   }
   if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)){
           error.email='Ingresar un email valido';
   }
   if(input.email.length>35){
       error.email='El email no puede tener mas de 35 caracteres';
   }
   if(!/\d/.test(input.password)){
       error.password='La contraseña debe tener al menos 1 numero';
   }
   if(!/^.{6,10}$/.test(input.password)){
       error.password='La contraseña debe tener entre 6 y 10 digitos';
   }

   return error;
}

export default validate;
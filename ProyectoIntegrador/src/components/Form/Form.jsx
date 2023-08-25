import { useEffect, useState } from "react"

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
    
export default function Form(){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState({
        email:'',
        password:'',
    });
    


    let handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : [event.target.value], 
        });

        setErrors(
            validate({
                   ...userData,
                    [event.target.name] : [event.target.value],
            })
        )
    }

    return(
        <form>
            <label>Email</label>
            <input
            name="email"
            type="text"
            placeholder="example@hotmail.com"
            value={userData.email}
            onChange={handleChange}
            />
            {errors.email ? <label>{errors.email}</label> : null}
            <label>Password</label>
            <input
            name="password"
            type="password"
            placeholder="password"
            value={userData.password}
            onChange={handleChange}
            />
            {errors.password ? <label>{errors.password}</label> : null}
            <button 
            type='submit'
            >Submit</button>
        </form>
    )
}
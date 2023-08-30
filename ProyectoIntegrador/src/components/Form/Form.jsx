import { useState } from "react"
import validate from "../../helpers/validate";
 
export default function Form({login}){
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
            [event.target.name] : event.target.value, 
        });

        setErrors(
            validate({
                   ...userData,
                    [event.target.name] : [event.target.value],
            })
        )
    }

    const submitHandler= event => {
        event.preventDefault();
        login(userData);
    }

    const disableHandler = () => {
        let disabled;
        for (let error in errors){
            if(errors[error] === '') disabled = false
            else {
                disabled = true;
                break;
            }
        }
        return disabled;
    }

    return(
        <form >
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
            disabled={disableHandler()}
            onClick={submitHandler}
            >Submit</button>
        </form>
    )
}
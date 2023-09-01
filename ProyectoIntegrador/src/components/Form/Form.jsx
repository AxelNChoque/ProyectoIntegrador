import { useState } from "react"
import validate from "../../helpers/validate";
import style from './form.module.css';
 
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
        setUserData({
            email:'',
            password:''
        }
        );
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
        <form className={style.login}>
            <div className={style.loginText}>
                <h1 className={style.h1}>Login</h1>
                <p className={style.p}>Login here using your email and password</p>
            </div>
            <div className={style.loginMenu}>
                <label className={style.label}>Email</label>
                <input className={style.input}
                name="email"
                type="text"
                placeholder="example@hotmail.com"
                value={userData.email}
                onChange={handleChange}
                />
                <label className={style.errors}>{errors.email || "\u00A0"}</label>
                <label className={style.label}>Password</label>
                <input className={style.input}
                name="password"
                type="password"
                placeholder="password"
                value={userData.password}
                onChange={handleChange}
                />
                <label className={style.errors}>{errors.password || "\u00A0"}</label>
                <button 
                className={`${style.button} ${disableHandler() ? style.disabledButton : ""}`}
                type='submit'
                disabled={disableHandler()}
                onClick={submitHandler}
                >Submit</button>
            </div>
        </form>
    )
}
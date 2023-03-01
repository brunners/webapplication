import css from './login.module.css'
import { useContext,useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Navigate } from 'react-router-dom'
const Login = () =>{

    const [email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const { handleLoginWithCredentials, status, userId } = useContext(AuthContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLoginWithCredentials(pass, email);
        console.log(status)
    }

    if (status === 'authenticated'){
        return (<Navigate to ='/'/>)
    }
    return(
        <div className={css.loginContainer}>
        <form onSubmit={handleSubmit} className={css.form}>
            <label>Name</label>
            <input type='text'
            onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <label>Password</label>
            <input type='password'
            onChange={(e)=>{
                setPass(e.target.value)
            }}/>
            <button type='submit'>Submit</button>
            </form>
            </div>
    )
}


export default Login
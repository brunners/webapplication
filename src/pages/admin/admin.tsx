import { AuthContext } from '../../context/authContext'
import { useContext,useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import css from "./admin.module.css";

const Admini = () =>{
    const {status,  } = useContext(AuthContext)

    if (status == 'checking')
    {return (<div className={css.adminContainer}>Checking</div>)}
    else if (status == 'authenticated'){
        return( (<div className={css.adminContainer}>
            
                <form className={css.itemForm}>
                    <label>Hass</label>
                    <input className={css.textform} type='text'/>
                    <label>Hass</label>
                    <input className={css.textform} type='text'/>
                    <label>Hass</label>
                    <input className={css.textform} type='text'/>
                    <label>Hass</label>
                    <input className={css.textform} type='text'/>
                </form>
            
        </div>))
    }
    else {
        return( (<Navigate to='/'/>))
    }
}

export default Admini
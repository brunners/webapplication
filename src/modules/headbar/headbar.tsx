import css from './headbar.module.css'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'


export default function Headbar()


{
    
    const {status, userId, handleLogOut } = useContext(AuthContext)
    const[isAuth,setIsAuth] = useState(false)
    const[isVisible,setIsVisible] = useState(true)
    useEffect(()=>{
        console.log(status)
        if (status === 'authenticated'){
            setIsAuth(true)
        }
    })

    useEffect(()=>{
        let prevScrollPos = window.pageYOffset;
        const handleScroll = ()=>{
            const currentScrollpos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollpos || currentScrollpos< 10)
            prevScrollPos =currentScrollpos
        };
        window.addEventListener('scroll', handleScroll)
        return()=> window.removeEventListener('scroll',handleScroll)
    },[])
    return(
    isAuth ?
    (
        
        <div className={`${css.headbarContainer} ${isVisible ? css.visible : css.invisible}`}>   <div onClick={()=>{
            handleLogOut()
            window.location.reload()
        }}>auth</div>
        </div>
    ) :
    <div className={`${css.headbarContainer} ${isVisible ? css.visible : css.invisible}`}>    unauth
    </div>)
    
}
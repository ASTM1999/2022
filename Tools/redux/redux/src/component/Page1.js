import React from "react";
import { useSelector } from "react-redux"; //เข้าถึง Store
import { useDispatch } from "react-redux"; //เข้าถึง Store
import '../css/page1.css'

const Page1 = () => {
    // Dispatch คือการเข้าถุึง Store 
    const dispatch = useDispatch()
    const {user} = useSelector(state=>({...state})) //เข้าถึง Store ได้ทั้งหมดแล้ว
    
    
    const handleLogin = () => {
        dispatch({
            type: 'LOGIN',
            payload: {
                username : 'Anusorn Login',
                password : '1234'
            }
        })

    }
    
    const handleLogout =()=>{
        dispatch({
            type: 'LOGOUT',
            payload: {
                username: 'Anusorn Logout',
                password: '0123'
            }

        })
    }

    console.log(user)
    return (
        <div id="page1">
            <h1>Hello Page1</h1>
            {/* <p>{user.username}</p> */}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
        
    )
}

export default Page1

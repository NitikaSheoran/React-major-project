import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/authSlice";
import authService from "../../Appwrite/authService";
function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return(
        <div>
            <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" >Logout</button>
        </div>
    )
}
export default LogoutBtn;
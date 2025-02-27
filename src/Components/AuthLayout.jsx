import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({
    children, authetication=true
}){
    const navigate = useNavigate();
    const authStatus = useSelector((state)=>state.auth.status);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        if(authetication && authStatus!=authetication){
            navigate("/login");
        }else if(!authetication && authStatus!=authetication){
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authetication])
    return !loader ? <>{children}</> : <h1>...Loading</h1>
}

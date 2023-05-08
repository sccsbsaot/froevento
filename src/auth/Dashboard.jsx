import { useState } from "react";
import Login from "./Login";
import Test from "./QRScanner";
import Attendance from "./Attendance";


const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState(null);


    return (
        <>
        {(!isLoggedIn) 
        ? <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
        : (data)
        ? <Attendance setIsLoggedIn={setIsLoggedIn} setData={setData} data={data} />
        : <Test data={data} setData={setData} setIsLoggedIn={setIsLoggedIn} />
        }  
        </>
    )
}

export default Dashboard;
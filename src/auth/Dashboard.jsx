import { useState } from "react";
import Login from "./Login";
// import QrScanner from "./QrScanner";
import Attendance from "./Attendance";


const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState("abs");


    return (
        <>
        {(!isLoggedIn) 
        ? <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
        : (data)
        ? <div>
        <h1>Dashboard</h1>
        <Attendance setIsLoggedIn={setIsLoggedIn} setData={setData} data={data} />
        </div>
        : <div>
        <button type="button" class="w-40 py-2 ml-20 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => {setIsLoggedIn(false)}} >
        logout
        </button> 
        {/* <QrScanner data/>={data} setData={setData} setIsLoggedIn={setIsLoggedIn} /> */}
        </div>
        
        }  
        </>
    )
}

export default Dashboard;
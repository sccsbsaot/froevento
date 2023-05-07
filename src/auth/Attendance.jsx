import React from "react";


const Attendance = ({ data, setIsLoggedIn, setData }) => {
    const click = () => {
        alert('Attendance done')
    }

    // [date,time,slot,teamname,members] = data;
    return (
        <>
        <div className=" flex flex-col items-center bg-cover bg-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 h-[100vh] w-[100vw]">
        <div className="flex bg-cover bg-center items-center justify-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-3/4 w-3/4 rounded-lg">
        <div className="text-0.5xl text-center md:text-1xl text-white font-inter font-bold "  >
            {/* Date: {date} &emsp;&emsp;    Time: {time} &emsp;&emsp;    Slot: {slot}
            <br></br>
            <br></br>
            Team Name: {teamname}
            <br></br>
            <br></br>
            Members:
            {members.map((member) => (
                <div>
                    Name: {member.name},
                    Stream: {member.branch},
                    Year: {member.year}
                </div>
            )
            )} */}
            
        </div>
        </div>  
        <br></br>
        <button type="button" class="focus:ring-4 focus:outline-none rounded-lg text-lg px-6 py-3 text-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={click} >
        Present
        </button>
        <button type="button" class="focus:ring-4 focus:outline-none rounded-lg text-lg px-6 py-3 text-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={() => {setIsLoggedIn(false)}} >
        logout
        </button>
        <button type="button" class="focus:ring-4 focus:outline-none rounded-lg text-lg px-6 py-3 text-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={() => {setData(null)}} >
        Scan Again
        </button>
        </div>
        </>
    );
    
};
export default Attendance;
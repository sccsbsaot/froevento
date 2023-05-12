import React from "react";

const DETAILS_API = import.meta.env.VITE_EVENT_API + "/details";


const Attendance = ({ data, setIsLoggedIn, setData }) => {
    const click = () => {
        alert('Attendance done')
    }

    const {team,members} = data;
    return (
        <>
        <div className=" flex flex-col items-center bg-cover bg-center justify-center bg-gradient-to-b from-indigo-500  to-purple-500 h-[100vh] w-[100vw]">
            <div className="flex bg-cover bg-center  justify-center bg-[#2f273f]/90  to-gray-700/70 h-[70vh] w-[95vw] rounded-lg">
                <div className="text-0.5xl text-left md:text-1xl text-white font-inter font-bold w-full "  >
                    <div className="flex flex-row gap-2 absolte items-center top-0 left-0 m-4">
                        <div className="flex rounded-full h-3 w-3 bg-gray-500/70" ></div>
                        <div className="flex rounded-full h-3 w-3 bg-gray-500/70" ></div>
                        <div className="flex rounded-full h-3 w-3 bg-gray-500/70" ></div>
                        <h1 className="text-white flex-grow text-md font-bold text-center">Team Info</h1>
                    </div>
                    <div className="border-2 border-gray-800/70 rounded-lg mb-2"></div>

                    <div className="text-center px-3 justify-between">{"13/05/23"} &emsp; {team.slot}  &emsp;  {room}</div>

                    <div className="text-center text-fuchsia-500 m-4">{team.teamName}</div>

                    <ul className="list-[disclosure-closed] list-inside  pl-2">
                    <span className="p-1 mb-2">Members:</span>
                    {members.map((member, key) => (
                        <li key={key} className="p-1">
                            <span className="text-cyan-500">{member.name}</span>&emsp;
                            <span className="text-green-500">{member.branch}</span>&emsp;
                            <span className="text-red-500">{member.year}</span>
                        </li>
                    )
                    )}
                    </ul>
                    
                </div>
            </div>  
            <br></br>
            <div className="flex justify-evenly w-full ">

                <div>
                <button type="button" class="flex focus:ring-4 focus:outline-none rounded-lg text-lg px-4 py-2 text-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={click} >
                Present
                </button></div>
                
                <div>
                <button type="button" class="flex focus:ring-4 focus:outline-none rounded-lg text-lg px-4 py-2 text-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={() => {setData(null)}} >
                Scan Again
                </button></div>
            </div>
            <button className='justify-evenly w-40 my-5 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.05]' onClick={() => {setIsLoggedIn(false)}}>Logout</button>
        </div>
        </>
    );
    
};
export default Attendance;
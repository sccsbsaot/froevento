import { useState } from 'react';
import QrReader from 'modern-react-qr-reader';
// import axios from 'axios';


const QR_API = import.meta.env.VITE_EVENT_API + "/qr";

const Test = ({data, setData, setIsLoggedIn}) => {
  const [scan, setScan] = useState(() => {false});

  const handleScan = x => {
    if (x) {
        alert(x);

        setData(
          {
            date: '2021-10-10',
            time: '10:00',
            slot: '1',
            teamName: 'Team 1',
            members: [
              {
                name: "Jhilik Singha",
                email: "jhilik.singha.22@aot.edu.in",
                year: "1st Year",
                branch: "CSE",
                gender: "Female",
                role: "leader",
              },
              {
                name: "Nilava Chakraborty",
                email: "nilava.chakraborty.22@aot.edu.in",
                year: "1st Year",
                branch: "CSE",
                gender: "Male",
                role: "member",
              },
              {
                name: "Ishita Saha",
                email: "Ishita.saha.22@aot.edu.in",
                year: "1st Year",
                branch: "CSE",
                gender: "Female",
                role: "member",
              }
            ]
          }
        )

        // axios.post(QR_API, {
        //   qr: Number(x)
        // })
        // .then( (response) => {
        //   console.log(response);
        //   setData(response.data);
        // })
        // .catch( (error) => {
        //   alert(error ? error : "error");
        // });
    }
  };

  const handleError = err => {
    console.error(err)
  }

  return (
      <div className=' items-center flex flex-col bg-black h-[100vh]'>
        {(scan) ? <QrReader
          delay={500}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        /> : <div className='m-40 p-10'></div>}

        <button className='w-40 mt-10 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.05]' onClick={() => {setIsLoggedIn(false)}}>Logout</button>
        <button className='w-40 mt-10 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.05]' onClick={() => {setScan(true)}}>Scan</button>
      </div>
    )
}


export default Test;
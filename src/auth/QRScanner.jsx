import { useState } from "react";
import QrReader from "modern-react-qr-reader";
import axios from "axios";

const QR_API = import.meta.env.VITE_EVENT_API + "/details";

const Test = ({ data, setData, setIsLoggedIn }) => {
  const [scan, setScan] = useState(() => {
    false;
  });

  const handleScan = async (x) => {
    if (x) {
      console.log(x);
      try {
        const token = localStorage.getItem("token")
        const config = {
          headers: {
            accesstoken: token,
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(QR_API, {
          data: x,
        }, config);

        if (response.status === 200) {
          console.log("login", response);
          setData(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className=" items-center flex flex-col bg-black h-[100vh]">
      {scan ? (
        <QrReader
          delay={500}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      ) : (
        <div className="m-40 p-10"></div>
      )}

      <button
        className="w-40 mt-10 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.05]"
        onClick={() => {
          localStorage.clear();
          setIsLoggedIn(false);
          alert("Signed out!");
        }}
      >
        Logout
      </button>
      <button
        className="w-40 mt-10 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-[1.05]"
        onClick={() => {
          setScan(true);
        }}
      >
        Scan
      </button>
    </div>
  );
};

export default Test;

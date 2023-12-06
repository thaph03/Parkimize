import React from "react";
import { useNavigate } from "react-router-dom";
function ParkingGuide({ token }) {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/homePage");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 ">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800  shadow-md rounded-xl	 px-8 py-8 mb-4 h-1/2 flex flex-col gap-64 ">
          <div className="flex flex-col gap-6 text-slate-200 ">
            <h1 className="text-4xl  font-mono decoration-white text-center">
              This is parking guide!
            </h1>
          </div>

          <div>
            <button
              className="btn btn-info btn-outline   text-white"
              onClick={backHome}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkingGuide;

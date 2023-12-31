import React from "react";
import { useNavigate } from "react-router-dom";
function JoinQueuePage({ token }) {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/homePage");
  };

  const queueA = () => {
    navigate("/joinQueue/countDownA");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 ">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800  shadow-md rounded-xl	 px-8 py-8 mb-4 h-1/2 flex flex-col gap-64 ">
          <div className="flex flex-col gap-6 text-slate-200 ">
            <h1 className="text-5xl  font-mono decoration-white text-center">
              Mission College
            </h1>
            <p className="text-xl font-light decoration-white text-center">
              Where will you park ?
            </p>

            <div className="flex flex-col items-center">
              <button
                className="btn btn-info btn-outline btn-wide text-white "
                onClick={queueA}
              >
                Parking Lot A
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-info btn-outline btn-wide text-white ">
                Parking Lot B
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-info btn-outline btn-wide text-white ">
                Parking Lot C
              </button>
            </div>
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

export default JoinQueuePage;

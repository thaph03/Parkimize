import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage({ token }) {
  const navigate = useNavigate();

  const accountHandle = () => {
    navigate("/accountPage");
  };

  const joinQueueHandle = () => {
    navigate("/joinQueue");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 ">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800  shadow-md rounded-xl	 px-8 py-8 mb-4 h-1/2 flex flex-col gap-64 ">
          <div className="flex flex-col gap-6 text-slate-200 ">
            <h1 className="text-5xl  font-mono decoration-white text-center">
              Parkimize
            </h1>
            <p className="text-xl font-light decoration-white text-center">
              Park your car in the most optimized way!
            </p>
            <h2 className="text-2xl  font-normal">
              Welcome, {token.user.user_metadata.first_name}!
            </h2>

            <div className="dropdown w-full ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-full text-left "
              >
                Previous Parking
              </div>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                <li>
                  <a>Parking Lot A - 10/1/23</a>
                </li>
                <li>
                  <a>Parking Lot B - 10/3/23</a>
                </li>
              </ul>
            </div>
            <div class="border-t border-white"></div>
            <div className="flex flex-col items-center">
              <button
                className="btn btn-info btn-outline btn-wide text-white "
                onClick={joinQueueHandle}
              >
                Join A Queue
              </button>
            </div>
          </div>

          <div>
            <button
              className="btn btn-info btn-outline   text-white"
              onClick={accountHandle}
            >
              Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

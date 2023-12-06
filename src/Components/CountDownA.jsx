import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountDownA = ({ token }) => {
  const navigate = useNavigate();

  const backJoinQueue = () => {
    navigate("/joinQueue");
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 3,
  });
  const [queue, setQueue] = useState(1);
  const incrementQueue = () => {
    setQueue(queue + 1);
  };

  incrementQueue;
  useEffect(() => {
    const timer = setInterval(() => {
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timer);
        // Timer reaches 0 logic here
        navigate("/parkingGuide", { state: { from: "/joinQueue/countDownA" } });
      } else {
        setTimeLeft((prevTime) => {
          let hours = prevTime.hours;
          let minutes = prevTime.minutes;
          let seconds = prevTime.seconds;

          if (seconds > 0) {
            seconds--;
          } else {
            if (minutes > 0) {
              minutes--;
              seconds = 59;
            } else {
              if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
              }
            }
          }

          return { hours, minutes, seconds };
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 ">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800  shadow-md rounded-xl	 px-8 py-8 mb-4 h-1/2 flex flex-col gap-64 ">
          <div className="flex flex-col gap-6 text-slate-200 ">
            <h3 className="text-4xl  font-mono decoration-white text-center">
              Estimated Wait Time
            </h3>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max pl-16">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": formatTime(timeLeft.hours) }}
                  ></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": formatTime(timeLeft.minutes) }}
                  ></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": formatTime(timeLeft.seconds) }}
                  ></span>
                </span>
                sec
              </div>
            </div>
            <h3 className="text-2xl  font-mono decoration-white text-center">
              Queue Position: {queue}
            </h3>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              className="btn  btn-error btn-wide btn-outline   text-white"
              onClick={backJoinQueue}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownA;

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../utils/client";

function ParkingGuide({ token }) {
  const navigate = useNavigate();
  const location = useLocation();

  const previousPath = location.state?.from;
  const [parkingData, setParkingData] = useState(null);

  useEffect(() => {
    const fetchColumnData = async () => {
      try {
        let tableName = null;
        switch (previousPath) {
          case "/joinQueue/countDownA":
            tableName = "Parking Lot A";
            break;
          case "/joinQueue/countDownB":
            tableName = "Parking Lot B";
            break;
          case "/joinQueue/countDownC":
            tableName = "Parking Lot C";
            break;
          default:
            console.log("cuties");
        }

        const { data, error } = await supabase
          .from(tableName) // Replace with your table name
          .select("is_occupied, zone_name"); // Replace with the column name you want to fetch

        if (error) {
          console.error("Error fetching data:", error.message);
          return;
        }

        if (data) {
          // Handle the retrieved data here
          setParkingData(data);

          // Or use it as needed in your application
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchColumnData();
  }, []);

  console.log(parkingData);
  console.log(previousPath);
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

import { useNavigate } from "react-router-dom";
import React from "react";
function AccountPage({ token }) {
  const navigate = useNavigate();
  const backLoginPage = () => {
    navigate("/");
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    navigate("/homePage");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 ">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800  shadow-md rounded-xl	 px-8 py-8 mb-4 h-1/2 flex flex-col gap-64 ">
          <div className="flex flex-col gap-6 text-slate-200 ">
            <h1 className="text-5xl  font-mono decoration-white text-center">
              Account Info
            </h1>
            <p className="text-xl font-light decoration-white ">
              {token.user.user_metadata.first_name}
              &nbsp;
              {token.user.user_metadata.last_name}
            </p>
            <div class="border-t border-white"></div>
            <h2 className=" font-mono">Your email: {token.user.email}</h2>
            <h2 className=" font-mono">
              Student ID: {token.user.user_metadata.student_id}
            </h2>
            <h2 className=" font-mono">Password: **************</h2>

            <div className="flex flex-col items-center">
              <button
                className="btn btn-outline btn-error  text-white "
                onClick={backLoginPage}
              >
                Logout
              </button>
            </div>
          </div>

          <div>
            <button
              className="btn btn-info btn-outline   text-white"
              onClick={logOut}
            >
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

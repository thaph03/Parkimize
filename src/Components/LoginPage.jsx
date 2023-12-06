import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../utils/client";
function LoginPage({ setToken }) {
  const navigate = useNavigate();

  function registerHandle() {
    navigate("/signUp");
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;

      setToken(data);
      navigate("/homePage");
    } catch (error) {
      alert("make sure you enter the correct password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="w-full max-w-md">
        <form
          className=" bg-zinc-800 shadow-md rounded-xl	 px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 text-center">
            <img
              src="src/assets/parkimizewhite.png"
              alt="Logo"
              className="mx-auto  w-10/12 " // Adjust width as needed
            />
            <p className="text-gray-400 text-m italic mb-6 text-slate-200">
              Park your car in the most optimized way!
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-4 text-white"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="input input-bordered input-info w-full text-white"
              id="email"
              type="email"
              placeholder="name@email.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-white text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input input-bordered input-info w-full"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white"
              href=""
            >
              Forgot password?
            </a>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white"
              href=""
              onClick={() => registerHandle()}
            >
              Register ?
            </a>
          </div>
          <div className="flex items-center flex-col align-middle">
            {" "}
            <button
              className="btn btn-wide btn-outline btn-info text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

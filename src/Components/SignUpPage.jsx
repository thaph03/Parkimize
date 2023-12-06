import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../utils/client";
function SignUpPage() {
  const navigate = useNavigate();

  const backLoginPage = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentID: 0,
    password: "",
    reEnterPassword: "",
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
    while (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.studentID !== 0
    ) {
      if (formData.password !== formData.reEnterPassword) {
        alert(
          "make sure to check if your re-enter password is correct and you are not leaving any input fields empty!"
        );
      } else {
        try {
          const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                first_name: formData.firstName,
                last_name: formData.lastName,
                student_id: formData.studentID,
              },
            },
          });
          if (error) throw error;
          alert("check email for confirmation!");
          backLoginPage;
        } catch (error) {
          alert(error);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="w-full max-w-md">
        <form
          className="bg-zinc-800 shadow-md rounded-xl	 px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 text-center">
            <img
              src="src/assets/parkimizewhite.png"
              alt="Logo"
              className="mx-auto  w-32 " // Adjust width as needed
            />
            <h1 className=" text-2xl	  mb-6 text-white">Account Creation</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-4  text-white"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="input input-bordered input-info w-full text-white"
              id="firstName"
              type="text"
              placeholder=""
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-4 text-white"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="input input-bordered input-info w-full text-white"
              id="lastName"
              type="text"
              placeholder=""
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-4 text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input input-bordered input-info w-full text-white"
              id="email"
              type="email"
              placeholder=""
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-4 text-white"
              htmlFor="studentID"
            >
              Student ID
            </label>
            <input
              className="input input-bordered input-info w-full text-white"
              id="studentID"
              type="number"
              placeholder=""
              name="studentID"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex flex-row justify-center align-middle space-x-16">
            <div>
              <label
                className="block  text-sm font-bold mb-2 text-white"
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
            <div>
              <label
                className="block  text-sm font-bold mb-2 text-white"
                htmlFor="reEnterPassword"
              >
                Re-enter password
              </label>
              <input
                className="input input-bordered input-info w-full"
                id="reEnterPassword"
                type="password"
                placeholder="******************"
                name="reEnterPassword"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-white"
              href=""
              onClick={() => backLoginPage()}
            >
              Back
            </a>
            <button
              className="btn  btn-outline btn-info text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

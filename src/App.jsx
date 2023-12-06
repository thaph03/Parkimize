import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import SignUpPage from "./Components/SignUpPage";
import AccountPage from "./Components/AccountPage";
import JoinQueuePage from "./Components/JoinQueuePage";
import CountDownA from "./Components/CountDownA";
import ParkingGuide from "./Components/ParkingGuide";
function App() {
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LoginPage setToken={setToken} />} />
      <Route path="/signUp" element={<SignUpPage />} />
      {token ? (
        <Route path="/homePage" element={<HomePage token={token} />} />
      ) : (
        ""
      )}
      {token ? (
        <Route path="/accountPage" element={<AccountPage token={token} />} />
      ) : (
        ""
      )}
      {token ? (
        <Route path="/joinQueue" element={<JoinQueuePage token={token} />} />
      ) : (
        ""
      )}
      {token ? (
        <Route
          path="/joinQueue/countDownA"
          element={<CountDownA token={token} />}
        />
      ) : (
        ""
      )}
      {token ? (
        <Route path="/parkingGuide" element={<ParkingGuide token={token} />} />
      ) : (
        ""
      )}
    </Routes>
  );
}

export default App;

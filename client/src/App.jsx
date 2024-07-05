import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
function App() {
  const location = useLocation();
  const shownav = !["/login", "/sign-up"].includes(location.pathname);
  const { Auth } = useContext(AuthProvider);
  console.log(Auth);
  return (
    <div>
      {shownav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={Auth ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

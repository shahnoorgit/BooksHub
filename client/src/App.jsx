import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Favourite from "./pages/Favourite";
import BookView from "./pages/BookView";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
function App() {
  const location = useLocation();
  const shownav = !["/login", "/sign-up"].includes(location.pathname);
  const { Auth } = useContext(AuthProvider);
  return (
    <div>
      {shownav && <Navbar auth={Auth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={Auth ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={Auth ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/favourite"
          element={Auth ? <Favourite /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/upload"
          element={Auth ? <Upload auth={Auth} /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile/:username"
          element={Auth ? <Profile auth={Auth} /> : <Navigate to={"/login"} />}
        />
        <Route path="/book-view/:id" element={<BookView />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

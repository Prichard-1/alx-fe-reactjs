import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const Login = () => {
  const login = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/profile";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav className="flex gap-4 my-2">
      <Link to="/profile">Profile</Link>
      <Link to="/blog/123">Blog Post 123</Link>
      <Link to="/blog/456">Blog Post 456</Link>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

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
        />

        {/* ✅ Dynamic Route must be /blog/:id */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

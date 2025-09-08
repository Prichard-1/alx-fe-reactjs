import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="flex gap-4 my-2">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> 
    </div>
  );
};

export default Profile;


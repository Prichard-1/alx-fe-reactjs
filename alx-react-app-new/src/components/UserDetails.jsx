import { useContext } from "react";
import UserContext from "../UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;


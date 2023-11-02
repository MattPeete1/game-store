import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }
    
    return (
        <nav>
            <span>Welcome, {user.name} - {user.email}</span>
            &nbsp; | &nbsp; 
            <Link to="/">Home</Link>
            &nbsp; | &nbsp; 
            <Link to="/purchases/new">Purchase Games</Link>
            &nbsp; | &nbsp;
            <Link to="/wishes">View Your Wish List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}
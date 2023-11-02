import * as userService from '../../utilities/users-service';
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }
    
    return (
        <Navbar bg='dark' data-bs-theme="light">
            <div style={{ width: "100%" }}>
                <span>Welcome, {user.name} - Purchased Games Will Be Sent To This Email - {user.email}</span>
                &nbsp; | &nbsp;
                <NavLink to="/">Home</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/purchases/new">Purchase Games</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/wishes">View Your Wish List</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
            </div>
        </Navbar>

    )
}
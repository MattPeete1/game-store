import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <Link to="/orders/new">Purchase Games</Link>
            &nbsp; | &nbsp;
            <Link to="/orders">Game Purchase History</Link>
        </nav>
    )
}
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
	<nav className="nav-container">
		<Link to="/">Start</Link> 
		<Link to="/Galleri">Galleri</Link> 
		<Link to="/battle">Battle</Link>
		
	</nav>
)

export default Nav;
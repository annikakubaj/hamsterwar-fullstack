import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
	<nav className="nav-container">
		<Link to="/">Start</Link>
		<Link to="/battle">Battle</Link>
		<Link to="/gallery">Galleri</Link>
	</nav>
)

export default Nav;
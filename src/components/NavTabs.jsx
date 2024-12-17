import { Link, useLocation } from 'react-router-dom';

function NavTabs () {
    const currentPage = useLocation().pathname;

    return (
       <nav> 
        <ul className="nav nav-tabs">
            <a className="nav-item">
                <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </a>
            <a className="nav-item">
                <Link to="/portfolio" className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </a>
            <a className="nav-item">
                <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </a>
            <a className="nav-item">
                <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                    Resume
                </Link>
            </a>
        </ul>
    </nav>
    )
}
export default NavTabs;
import { Link, NavLink } from 'react-router-dom'

const LINKS = [
  {
    id: 1,
    to: '/',
    text: 'Home'
  },
  {
    id: 2,
    to: '/apartments',
    text: 'Apartments'
  },
  {
    id: 3,
    to: '/apartments/create',
    text: 'Create new apartment'
  },
]

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          HackBNB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/apartments">
                Apartments
              </NavLink>
            </li> */}

            {LINKS.map(linkProps => (
              <li className="nav-item" key={linkProps.id}>
                <NavLink end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to={linkProps.to}>
                  {linkProps.text}
                </NavLink>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar

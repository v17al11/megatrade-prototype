import React from 'https://esm.sh/react@18.3.1';
import { NavLink } from 'https://esm.sh/react-router-dom@6.23.0';

const navItems = [
  { label: 'Live Trades', path: '/' },
  { label: 'Auctions', path: '/auction' },
  { label: 'Quests', path: '/quests' },
  { label: 'Profiles', path: '/profile-customization' },
  { label: 'Clans', path: '/clans' },
];

const TopNav = () => {
  return (
    <nav className="navbar-megatrade d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div className="d-flex align-items-center gap-4 flex-wrap">
        <span className="navbar-brand">MegaTrade.GG</span>
        <div className="d-flex align-items-center flex-wrap">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-link px-0 ${isActive ? 'active fw-bold' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-outline-mega px-3">Invite Friends</button>
        <button className="btn btn-mega px-3">Login</button>
      </div>
    </nav>
  );
};

export default TopNav;

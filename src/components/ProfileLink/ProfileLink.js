import { NavLink } from 'react-router-dom';
import './ProfileLink.css';

function ProfileLink() {
  return (
    <NavLink
      to="/profile"
      className="link profile-link"
      activeClassName="profile_link_active"
    >
      Аккаунт
    </NavLink>
  );
}

export default ProfileLink;
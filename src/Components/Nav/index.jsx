import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { GlobalContext } from '../../App';
import '../../app.scss';

const NavBar = () => {
  const { toggleAppTheme, appTheme } = useContext(GlobalContext);

  const handleThemeClick = () => {
    localStorage.setItem('theme', appTheme === 'light' ? 'dark' : 'light');
    toggleAppTheme();
  };
  return (
    <nav className="navBar">
      <ul>
        <Link to={'/'}>Home</Link>
        <HomeIcon />
        <Link to={'/settings'}>Settings</Link>
        <SettingsIcon />
        <Button onClick={handleThemeClick}>
          {appTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
      </ul>
    </nav>
  );
};

export default NavBar;

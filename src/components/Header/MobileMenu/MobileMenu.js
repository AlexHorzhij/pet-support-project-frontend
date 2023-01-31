import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { Lt } from './MobileMenu.styled';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import Nav from '../Nav/Nav';
import { MobileMenu } from './MobileMenu.styled';
// import { AuthNavigation, AuthItem } from '../AuthNav/AuthNav.styled';
import AuthNav from '../AuthNav/AuthNav';
import { Btn } from './MobileMenu.styled';
// import { MobileContainer } from './MobileMenu.styled';

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleMenuItemClick = event => {
  //     setAnchorEl(null);
  //   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Btn
        edge="start"
        color="inherit"
        alia-label="menu"
        aria-controls="lock-menu"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <MenuIcon />
      </Btn>
      {/* <Lt
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          // id="lock-button"
          aria-haspopup="listbox"
          //   aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary="When device is locked" />
        </ListItem>
      </Lt> */}
      <MobileMenu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div>
          <AuthNav />
          <Nav />
        </div>
      </MobileMenu>
    </div>
  );
}

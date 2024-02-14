import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CallIcon from '@mui/icons-material/Call';
import Logo from '../Assets/logo.png';

const Navbar = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if(homeSection){
      homeSection.scrollIntoView({behavior : "smooth"});
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if(aboutSection){
      aboutSection.scrollIntoView({behavior: "smooth"});
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("aparts");
    if(contactSection){
      contactSection.scrollIntoView({behavior:"smooth"});
    }
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuList = [
    {
      menu: "Inicio",
      icon: <HomeIcon/>,
      action: scrollToHome,
    },
    {
      menu: "Servicios",
      icon: <InfoIcon/>,
      action: scrollToAbout,
    },
    {
      menu: "Aparts",
      icon: <CallIcon/>,
      action: scrollToContact,
    }
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img
        className="logoTerra"
          src={Logo}
          style={{
            position: "absolute",
            width: "15rem",
            top: -24,
            left: 100,
            padding: "10px",
          }}
          alt="Terra Maria"
        />
      </div>
      <div className="navbar-links-container">
        <button className="btnNavBar" onClick = {scrollToHome}>Inicio</button>
        <button className="btnNavBar" onClick={scrollToAbout}>Servicios</button>
        <button className="btnContactame" onClick={scrollToContact}>Aparts</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuList.map((item) => (
              <ListItem key={item.menu} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.menu}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

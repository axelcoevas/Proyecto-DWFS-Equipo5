import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Search from "./components/Search";
import SearchIconWrapper from "./components/SearchIconWrapper";
import StyledInputBase from "./components/StyledInputBase";
// return <div>
//     <h1>Nav</h1>
//     <Link to='/'>Home</Link>
//     <Link to='/login'>Login</Link>
// </div>

import Logo from "../Login/components/logo";
import useAuth from "../../auth/useAuth";

const Nav = () => {

  const { logout, hasType } = useAuth();

  // const [account, setAccount] = useState("seller")
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleOpenNotifications = () => {
    const openLink = (hasType() === "seller") ? '/dashboard' : 'myorders'
    history.push(openLink)
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="login"
          style={{
            textDecoration: "none",
            textUnderline: "none",
            color: "black",
          }}
        >
          Login
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="signin"
          style={{
            textDecoration: "none",
            textUnderline: "none",
            color: "black",
          }}
        >
          Register
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="profile"
          style={{
            textDecoration: "none",
            textUnderline: "none",
            color: "black",
          }}
        >
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="login"
          style={{
            textDecoration: "none",
            textUnderline: "none",
            color: "black",
          }}
        >
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchProducts = () => {
    if (search.length > 0) {
      history.push(`/search?q=${search}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            padding: { xs: 1, md: 0 },
            backgroundColor: "#EBEBEB",
            color: "#3F3F3F",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              flexDirection: "row",
            }}
          >
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ m: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h4"
              noWrap
              component="div"
            // sx={{ display: { xs: "none", sm: "block" } }}
            >
              {/* MKT PLACE */}
              <Box sx={{ margin: 1, marginLeft: 2 }}>
                <Link to="/">
                  <Logo />
                </Link>
              </Box>
            </Typography>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            {/* <Box flex={1} sx={{ margin: 2 }}>
              
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Box> */}
          </Box>

          <Search sx={{ flex: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              fullWidth
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchProducts();
                }
              }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              sx={{
                border: 1,
                borderRadius: 1,
                borderColor: "rgba(63, 63, 63, 0.5)",
              }}
            />
          </Search>

          <Box sx={{ display: { xs: "none", md: "flex" }, margin: 1 }}>
            <IconButton
              size="large"
              aria-label="show your likes"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              onClick={() => handleOpenNotifications()}
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>


            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Nav;

"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Button, Menu } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoDesktop from "../images/logoDesktop.png";
import SearchBar from "./SearchBar";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      component="header"
      sx={{ backgroundColor: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            href="/"
            sx={{
              display: { xs: "none", md: "inline-block" },
              overflow: "hidden",
              marginRight: "30rem",
              marginTop: "1rem",
            }}
          >
            <Image src={LogoDesktop} height={40} width={130} alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ marginRight: 2 }}
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Button component={Link} href="/" color="inherit">
              Home
            </Button>
            <Button component={Link} href="/Favorite" color="inherit">
              Favoriter
            </Button>
            <Button component={Link} href="/" color="inherit">
              Contact
            </Button>
          </Menu>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button component={Link} href="/Favorite" color="inherit">
              Favorites
            </Button>
            <Button component={Link} href="/" color="inherit">
              Trending
            </Button>
            <Button component={Link} href="/" color="inherit">
              Contact
            </Button>
            <Button component={Link} href="/" color="inherit">
              Home
            </Button>
          </Box>
          <SearchBar defaultValue={null} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

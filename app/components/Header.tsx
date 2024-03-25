"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Menu } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LogoImage from "../images/logoDesktop.png";
import LogoMobile from "../images/logoMobile.png";

function ResponsiveAppBar() {
  // Tillstånd för att hantera öppnande och stängning av navigeringsmenyn och användarmenyn
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // Funktioner för att öppna och stänga navigeringsmenyn och användarmenyn
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid black",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              display: { xs: "none", md: "inline-block" },
              borderRadius: "50%",
              overflow: "hidden",
              width: 70,
              height: 70,
              marginRight: "30rem",
            }}
          >
            <Image src={LogoImage} height={75} width={75} alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Layout för mobil */}
            <Box
              component={Link}
              href="/"
              sx={{
                textDecoration: "none",
              }}
            >
              {/* logo namn mobil vy */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  padding: "10px",
                }}
              >
                <Image src={LogoMobile} height={50} width={50} alt="Logo" />
              </Typography>
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
                Favoriter
              </Button>
              <Button component={Link} href="/" color="inherit">
                Trending
              </Button>
              <Button component={Link} href="/" color="inherit">
                Contact
              </Button>
            </Menu>
          </Box>

          {/* Tillfälliga länkar till andra sidor desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button component={Link} href="/" color="inherit">
              Favoriter
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

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

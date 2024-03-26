"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import LogoDesktop from "../images/logoDesktop.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function ResponsiveAppBar() {
  return (
    <AppBar position="static" component="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            href="/"
            sx={{
              display: { xs: "none", md: "inline-block" },
              overflow: "hidden",
              marginRight: "30rem",
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
            >
              <MenuIcon />
            </IconButton>
            <Box
              component={Link}
              href="/"
              sx={{
                textDecoration: "none",
              }}
            >
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
                <Image src={LogoDesktop} height={20} width={70} alt="Logo2" />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Link href="/" passHref>
                <Typography
                  variant="button"
                  component="a"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "1rem",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link href="/favorite" passHref>
                <Typography
                  variant="button"
                  component="a"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "1rem",
                  }}
                >
                  Favorites
                </Typography>
              </Link>
              <Link href="/contact" passHref>
                <Typography
                  variant="button"
                  component="a"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

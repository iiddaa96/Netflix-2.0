import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        bottom: 0,
        minHeight: "15vh",
      }}
    >
      <Container>
        <Typography variant="body1" align="center">
          Questions? Contact us.
        </Typography>
        <Box mt={2} display="flex" justifyContent="center">
          <Typography variant="body2" component="span" sx={{ marginRight: 2 }}>
            FAQ
          </Typography>
          <Typography variant="body2" component="span" sx={{ marginRight: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" component="span" sx={{ marginRight: 2 }}>
            Netflix-2.0 Originals
          </Typography>
        </Box>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          © {new Date().getFullYear()} Netflix-2.0, Inc.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

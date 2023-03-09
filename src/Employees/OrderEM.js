import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
//import Button from 'react-bootstrap/Button';



function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Salad Employees
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="AlertOrder"
              sx={{ my: 1, mx: 1.5 }}
            >
              การแจ้งเตือน
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="History"
              sx={{ my: 1, mx: 1.5 }}
            >
              ประวัติ
            </Link>
          </nav>
          <Button href="LoginEM" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            เข้าสู่ระบบ
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Queue
        </Typography>
      </Container>
    </React.Fragment>

    


  );
}

export default function Pricing() {
  return <PricingContent />;
}
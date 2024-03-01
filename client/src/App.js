
// import './App.css';
// import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
// import memorables from "./images/memorables.png"
// import Form from "./components/Form/Form"
// import Posts from "./components/Posts/Posts"
// function App() {
//   return (
//     <Container maxidth="lg">
//       <AppBar position='static' color='inherit'>
//         <Typography variant="h2" align="Center">Memorables</Typography>
//         <img src={memorables} alt="memorables" height="260"/>
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid container justify="space-between" alignItems='stretch' spacing="3">
//             <Grid item xs={12} sm={7}>
//               <Posts/>
//             </Grid>
//             <Grid item xs={12} sm={7}>
//               <Form/>
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// }

// export default App;

import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memorables from "./images/memorables.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { styled } from '@mui/system';

// Define your styles using the styled function
const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

const StyledHeading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
});

const StyledImage = styled('img')({
  marginLeft: '15px',
  borderRadius: '10px',
});

const App = () => {
  return (
    <Container maxWidth="lg">
      {/* Use the styled components */}
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">Memorables</StyledHeading>
        <StyledImage src={memorables} alt="memorables" height="260" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;


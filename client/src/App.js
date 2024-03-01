
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
import { Container, Grow, Grid } from '@mui/material';
import memorables from "./images/memorables.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { StyledAppBar, StyledHeading, StyledImage } from './style';  // Import the styles

const App = () => {
  return (
    <Container maxWidth="lg">
      {/* Use the styled components */}
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">Memorables</StyledHeading>
        <StyledImage src={memorables} alt="memorables" height="60" />
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
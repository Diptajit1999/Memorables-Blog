import logo from './logo.svg';
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import memorables from "./images/memorables.png"
function App() {
  return (
    <Container maxidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant="h2" align="Center">Memorables</Typography>
        <img src={memorables} alt="memorables" height="260"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing="3">
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Forms/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

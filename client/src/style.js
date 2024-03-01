// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//   },
//   image: {
//     marginLeft: '15px',
//   },
// }));

// styles.js
import { styled } from '@mui/system';
import { AppBar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
//   padding: '10px',
});

export const StyledHeading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
});


export const StyledImage = styled('img')({
    marginLeft: '15px',
    borderRadius: '10px',
  });
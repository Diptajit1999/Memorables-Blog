// import React, { useState } from "react";
// import { TextField, Button, Typography, Paper } from "@mui/material";
// import FileBase from "react-file-base64"
// import useStyles from "./Form.js";
// const Form = () => {
//   const [postData, setPostData] = useState({
//     creator: "",
//     title: "",
//     message: "",
//     tags: "",
//     selectedFile: "",
//   });
// const classes=useStyles()
//   const handleForm=(e)=>{
//     e.preventDefault()
//     console.log(postData)
//   }

//   const clear=()=>{

//   }
//   return (
//     <Paper className={`${classes.paper}`}>
//       <h2>Form</h2>
//       <form action="" autoComplete="off" noValidate onSubmit={handleForm} className={`${classes.root} ${classes.form}`}>
//         <Typography variant="h5">Creating a Memorablia</Typography>
//         <TextField name="Creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => {setPostData({ ...postData, creator: e.target.value });}}/>
//         <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => {setPostData({ ...postData, title: e.target.value });}}/>
//         <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => {setPostData({ ...postData, message: e.target.value });}}/>
//         <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => {setPostData({ ...postData, tags: e.target.value });}}/>
//         <div className={classes.fileInput}>
//           <FileBase
//           type="file"
//           multiple={false}
//           onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
//           />
//         </div>
//       <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//       <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;

import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { styled } from '@mui/system';
import {useDispatch} from "react-redux"
import { createPost } from "../../actions/posts";
// Styled components
const StyledPaper = styled(Paper)({
  padding: '20px',
  width: '70%',
  margin: 'auto',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  // height:"60%"
  marginLeft:"110px",
  height: 'fit-content',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px'
});

const StyledFileInput = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '15px',
  // marginLeft:"20px",
});

const StyledButtonSubmit = styled(Button)({
  marginTop: '20px',
  
});

const StyledButtonClear = styled(Button)({
  marginTop: '10px',
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'red', // Change to the desired hover color
  },
});

const Form = () => {
  const initialFormData={
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  }
  const [postData, setPostData] = useState(initialFormData);

const dispatch=useDispatch()
  const handleForm = (e) => {
    e.preventDefault();
    // console.log(postData);
    dispatch(createPost(postData))
  };

const handleChange=(e)=>{
const {name,value} = e.target;
setPostData((pre)=>{
  return {...pre,[name]:value}
})
}
  const clear = () => {
    // Implement clearing logic here if needed
  };
 const {  creator,
 title,
 message,
 tags,
 selectedFile} = postData
  return (
    <StyledPaper>
      <Typography variant="h4" align="center" style={{ marginBottom: '18px',fontSize:"18px" }}>Create a Memorabilia</Typography>
      <StyledForm action="" autoComplete="off" noValidate onSubmit={handleForm}>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={creator} onChange={handleChange}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={title} onChange={handleChange}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={2} value={message} onChange={handleChange}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={tags} onChange={handleChange}/>
        <StyledFileInput>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </StyledFileInput>
        <StyledButtonSubmit variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</StyledButtonSubmit>
        <StyledButtonClear variant="contained" size="small" onClick={clear} fullWidth>Clear</StyledButtonClear>
      </StyledForm>
    </StyledPaper>
  );
};

export default Form;

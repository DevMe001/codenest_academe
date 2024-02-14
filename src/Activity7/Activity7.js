import { Box, TextField, Typography } from '@mui/material';

import { grey } from '@mui/material/colors';
export default function Activity7() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">STRING CONCATENATION</Typography>
        <Typography variant="h5">Exercise</Typography>
        <Typography>
        Write a Java program to concatenate a given string to the end of another string.
        </Typography>
        <TextField multiline rows={8} sx={{ background: grey[200] }} />
        
      </Box>
      
    </Box>
  );
}

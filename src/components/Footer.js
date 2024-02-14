import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        minHeight: '10vh',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        background: grey[900],
        color: grey[50],
      }}
    >
      <Typography fontFamily="Playfair Display">Adaptive e-Learning</Typography>
      <Typography variant="caption">© BSCS 4C | THESIS 2024</Typography>
    </Box>
  );
}

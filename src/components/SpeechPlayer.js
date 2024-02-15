import { Paper } from '@mui/material';
import AudioPlayer from 'mui-audio-player-plus';

import { grey } from '@mui/material/colors';

const colorPrimary = '#1e7b75';
const colorPrimaryShade = '#26918a';

export default function SpeechPlayer(props) {
  const { src } = props;
  return (
    <Paper
      sx={{
        my: '15px',
        pr: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        borderRadius: '100vh',
      }}
    >
      <AudioPlayer
        display="timeline"
        containerWidth="100%"
        progressColor={colorPrimary}
        paperize={false}
        inline
        playPauseIconButtonProps={{
          sx: {
            background: colorPrimaryShade,
            color: grey[50],
            '&:hover': { background: colorPrimary },
          },
        }}
        src={src}
        muted
      />
    </Paper>
  );
}

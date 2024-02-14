import VideoStream from '../VideoStream/VideoStream';
import { useSettingsContext } from '../Settings/SettingsContext';
import { useDisplayContext } from '../Display/DisplayContext';
import { Box, Paper, ToggleButton, Tooltip, Typography } from '@mui/material';
import {
  Angry,
  Disgusted,
  Fearful,
  Happy,
  Neutral,
  Sad,
  Surprised,
} from '../Icons';
import { grey } from '@mui/material/colors';

import VideocamOnIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

const EmojiWidget = () => {
  const { emoji } = useDisplayContext();

  switch (emoji) {
    case 'neutral':
      return <Neutral />;
    case 'happy':
      return <Happy />;
    case 'sad':
      return <Sad />;
    case 'angry':
      return <Angry />;
    case 'fearful':
      return <Fearful />;
    case 'disgusted':
      return <Disgusted />;
    case 'surprised':
      return <Surprised />;
    default:
      return <></>;
  }
};

const VideoStreamOverlay = () => {
  const { canvasRef } = useDisplayContext();
  return (
    <canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      ref={canvasRef}
    ></canvas>
  );
};

export default function VideoComponent() {
  const { webcamOn, setWebcamOn, overlayOn, emojiOn } = useSettingsContext();

  const { setMountedVideoComponent } = useDisplayContext();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '25vw',
          position: 'relative',
        }}
      >
        {webcamOn ? (
          <VideoStream />
        ) : (
          <Paper
            square
            sx={{
              width: '25vw',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: grey[50],
              color: grey[500],
            }}
          >
            <VideocamOffIcon fontSize="large" />
            <Typography>Webcam is turned off</Typography>
          </Paper>
        )}
        {webcamOn && overlayOn && <VideoStreamOverlay />}
        {webcamOn && emojiOn && (
          <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
            <EmojiWidget />
          </Box>
        )}
        <Tooltip title={webcamOn ? 'Turn webcam off' : 'Turn webcam on'}>
          <Box
            sx={{
              borderRadius: '5px',
              position: 'absolute',
              left: 10,
              bottom: 10,
              background: grey[50],
              ':hover': {
                background: grey[100],
              },
            }}
          >
            <ToggleButton
              value="check"
              selected={webcamOn}
              onChange={() => {
                if (webcamOn) {
                  setWebcamOn(false);
                  setMountedVideoComponent(false);
                } else if (!webcamOn) {
                  setWebcamOn(true);
                }
              }}
            >
              {webcamOn ? <VideocamOnIcon /> : <VideocamOffIcon />}
            </ToggleButton>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
}

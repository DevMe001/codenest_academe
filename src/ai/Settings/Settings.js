import { useSettingsContext } from './SettingsContext';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function Settings() {
  const { anchorEl, open, handleClose } = useSettingsContext();

  const { emojiOn, setEmojiOn, overlayOn, setOverlayOn } = useSettingsContext();
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{ zIndex: 4 }}
    >
      <MenuItem
        onClick={() => {
          if (emojiOn) {
            setEmojiOn(false);
            localStorage.setItem('emojiOn', false);
          } else if (!emojiOn) {
            setEmojiOn(true);
            localStorage.setItem('emojiOn', true);
          }
        }}
      >
        <ListItemIcon>{emojiOn && <CheckIcon />}</ListItemIcon>
        Show Emoji
      </MenuItem>
      <MenuItem
        onClick={() => {
          if (overlayOn) {
            setOverlayOn(false);
            localStorage.setItem('overlayOn', false);
          } else if (!overlayOn) {
            setOverlayOn(true);
            localStorage.setItem('overlayOn', true);
          }
        }}
      >
        <ListItemIcon>{overlayOn && <CheckIcon />}</ListItemIcon>
        Show AI Overlay
      </MenuItem>
    </Menu>
  );
}

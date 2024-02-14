import { createContext, useContext, useEffect, useState } from 'react';
const SettingsContext = createContext({});

const SettingsContextProvider = ({ children }) => {
  const [webcamOn, setWebcamOn] = useState(false);
  const [overlayOn, setOverlayOn] = useState(true);
  const [emojiOn, setEmojiOn] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const overlayOn =
      localStorage.getItem('overlayOn') === 'true' ? true : false;
    if (overlayOn !== null) {
      setOverlayOn(overlayOn);
    }
    const emojiOn = localStorage.getItem('emojiOn') === 'true' ? true : false;
    if (emojiOn !== null) {
      setEmojiOn(emojiOn);
    }
  }, []);

  const contextValue = {
    webcamOn,
    setWebcamOn,
    overlayOn,
    setOverlayOn,
    emojiOn,
    setEmojiOn,
    settingsVisible,
    setSettingsVisible,
    anchorEl,
    setAnchorEl,
    open,
    handleClick,
    handleClose,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

const SettingsContextConsumer = ({ children }) => {
  return (
    <SettingsContext.Consumer>
      {(context) => {
        if (context === undefined || context === null) {
          throw new Error(
            'Error: useSettingsContext() can only be used inside of SettingsContext'
          );
        }
        return children(context);
      }}
    </SettingsContext.Consumer>
  );
};

const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (context === undefined || context === null) {
    throw new Error(
      'Error: useSettingsContext() can only be used inside of SettingsContext'
    );
  }
  return context;
};

export { SettingsContextProvider, SettingsContextConsumer, useSettingsContext };

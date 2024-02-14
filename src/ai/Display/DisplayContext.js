import React, { createContext, useContext, useRef, useState } from 'react';

const DisplayContext = createContext({});

const expressions = [
  'neutral',
  'happy',
  'sad',
  'angry',
  'fearful',
  'disgusted',
  'surprised',
];

const DisplayContextProvider = ({ children }) => {
  const [loadedModels, setLoadedModels] = useState(false);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);
  const [currentExpression, setCurrentExpression] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [feelingNegative, setFeelingNegative] = useState(false);
  const canvasRef = useRef();

  const contextValue = {
    loadedModels,
    setLoadedModels,
    mountedVideoComponent,
    setMountedVideoComponent,
    currentExpression,
    setCurrentExpression,
    emoji,
    setEmoji,
    feelingNegative,
    setFeelingNegative,
    canvasRef,
  };

  return (
    <DisplayContext.Provider value={contextValue}>
      {children}
    </DisplayContext.Provider>
  );
};

const DisplayContextConsumer = ({ children }) => {
  return (
    <DisplayContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'Error: useDisplayContext() can only be used inside of DisplayContext.'
          );
        }
        return children(context);
      }}
    </DisplayContext.Consumer>
  );
};

/**
 * Custom hook for accessing DisplayContext(only inside of DisplayContextProvider).
 * @returns {DisplayContextType} - Returns DisplayContext
 */
const useDisplayContext = () => {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error(
      'Error: useDisplayContext() can only be used inside of DisplayContext.'
    );
  }
  return context;
};

export {
  DisplayContextProvider,
  DisplayContextConsumer,
  useDisplayContext,
  expressions,
};

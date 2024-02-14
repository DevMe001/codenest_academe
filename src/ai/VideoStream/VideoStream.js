import { useCallback, useEffect, useRef } from 'react';
import { detectFaces, drawResults } from '../../utilities/faceAPI';
import { useDisplayContext } from '../Display/DisplayContext';
import { useSettingsContext } from '../Settings/SettingsContext';
import Webcam from 'react-webcam';

const VideoConstraints = {
  facingMode: 'user',
};

export default function VideoStream() {
  const webcamRef = useRef(null);
  const {
    setCurrentExpression,
    setEmoji,
    setMountedVideoComponent,
    canvasRef,
  } = useDisplayContext();
  const { webcamOn, overlayOn } = useSettingsContext();

  // Sets mountedVideoComponent to true after 2seconds, when this component is mounted.
  useEffect(() => {
    setTimeout(() => {
      webcamOn && setMountedVideoComponent(true);
    }, 2000);
  });

  useEffect(() => {
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      await getFaces();
    }, 500);
    return () => {
      clearInterval(tick);
    };
  });

  const formatExpression = (info) => {
    if (
      info === undefined ||
      info === null ||
      info[0] === undefined ||
      info[0] === null ||
      info[0].expressions === undefined ||
      info[0].expressions === null
    ) {
      return null;
    }
    const expression = [];
    for (const [key, value] of Object.entries(info[0].expressions)) {
      expression.push({
        expression: key,
        percent: value * 100,
      });
    }
    return expression;
  };

  /**
   *
   * @param {Array} formattedExpression - Formatted expression
   * @returns {String} - Returns the emoji name.
   */
  const getEmojiName = (formattedExpression) => {
    if (
      formattedExpression === null ||
      formattedExpression === undefined ||
      formattedExpression.length < 1
    ) {
      return null;
    }
    let emojiName = null,
      maxPercent = Number.NEGATIVE_INFINITY;
    formattedExpression.forEach((expr) => {
      if (expr.percent > maxPercent) {
        emojiName = expr.expression;
        maxPercent = expr.percent;
      }
    });
    return emojiName;
  };
  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const info = await detectFaces(webcamRef.current.video);
      if (webcamOn && overlayOn && webcamRef.current != null) {
        await drawResults(
          webcamRef.current.video,
          canvasRef.current,
          info,
          'boxLandmarks'
        );
      }
      const formattedExpression = formatExpression(info);
      await setEmoji((previousEmoji) => {
        if (formattedExpression === undefined || formattedExpression === null) {
          return previousEmoji;
        }
        const name = getEmojiName(formattedExpression);
        if (name === null) {
          return previousEmoji;
        }
        return name;
      });
      await setCurrentExpression((previousExpression) => {
        if (formattedExpression === undefined || formattedExpression === null) {
          return previousExpression;
        }
        return formattedExpression;
      });
    }
  }, [webcamRef]);

  return (
    <Webcam
      audio={false}
      ref={webcamRef}
      videoConstraints={VideoConstraints}
      style={{
        maxWidth: '25vw',
      }}
    />
  );
}

import { useEffect, useState } from 'react';
import { loadEssentialModels } from '../../utilities/faceAPI';
import { useDisplayContext } from './DisplayContext';

import { Box, CircularProgress, Collapse, Typography } from '@mui/material';
import { Howl } from 'howler';

import VideoComponent from '../VideoComponent/VideoComponent';
import Settings from '../Settings/Settings';

import { grey } from '@mui/material/colors';

import AIIcon from '@mui/icons-material/FaceRetouchingNatural';
import HelperAI from '../HelperAI/HelperAI';

import Ding from './audio/notify.mp3';
import localforage from 'localforage';
import { isEmpty } from 'lodash';

export default function Display() {


  const {
    currentExpression,
    loadedModels,
    setLoadedModels,
    feelingNegative,
    setFeelingNegative,
  } = useDisplayContext();
  var ding = new Howl({
    src: [Ding],
  });


  const [counter,setCounter] = useState(3)


  const IndexedDB = localforage;





  useEffect(()=>{
  
    IndexedDB.getItem('ai').then(item => !isEmpty(item) && setCounter(JSON.parse(item)));
  
  
  
  },[IndexedDB]);


  useEffect(() => {
    if (currentExpression) {
      if (
        currentExpression[2].percent +
          currentExpression[3].percent +
          currentExpression[4].percent +
          currentExpression[5].percent +
          currentExpression[6].percent >=
        30
      ) {
        setFeelingNegative(true);

    
      
    
      
      }
    }
  }, [currentExpression]);

  useEffect(() => {
    if (feelingNegative && counter > 0) {

   
      ding.play();
     

    }
  }, [feelingNegative]);

  useEffect(() => {
    loadEssentialModels().then(() => setLoadedModels(true));
  });

  return loadedModels ? (
    <Box
      sx={{
        minWidth: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          p: '60px',
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <VideoComponent />
        <Settings />
      </Box>
        {counter > 0 &&  
        <Collapse in={feelingNegative}>
        <HelperAI />
      </Collapse>}
    </Box>
  ) : (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <CircularProgress
          size={100}
          thickness={5}
          sx={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}
        />
        <AIIcon
          fontSize="large"
          color="primary"
          sx={{ position: 'absolute' }}
        />
      </Box>
      <Typography variant="h5" textAlign="center" fontFamily="Playfair Display">
        Adaptive e-Learning
      </Typography>
      <Typography sx={{ color: grey[600] }}>Loading AI...</Typography>
    </Box>
  );
}

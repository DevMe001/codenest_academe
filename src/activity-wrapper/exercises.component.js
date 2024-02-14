import React, { useEffect } from 'react'
import useExerciseCompiler from '../utilities/useExerciseCompiler';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';

import { grey } from '@mui/material/colors';


import { isEmpty, isNull,isUndefined} from 'lodash';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpeechPlayer from '../components/SpeechPlayer';
import localforage from 'localforage';

const Exercise = ({heading,question,audio1,codeOutput,codeAnswer,audio2,newInputValue=Number(0),questionNo=Number(0)}) => {

  const [toggleAnswer,onRunCompiler,onTyping,setDefaultInputValue,setQuestionNUmber,displayAnswer,answerToggle,typing,valid,counter] = useExerciseCompiler('http://localhost:5000/runnable/exec');
  

  useEffect(() => {
    // Update the defaultValue of the input element when newInputValue changes
    if (!isNull(newInputValue)) {
      setDefaultInputValue(newInputValue);
      console.log(newInputValue)
    }
    if(!isNull(questionNo)){

      console.log(questionNo,'get number')
      setQuestionNUmber(questionNo)
    }
  }, [newInputValue,questionNo]);

  return (
    <Box sx={{maxHeight:'80vh'}} className="topic-container">

    {!answerToggle &&  <Box className="topic-section">
      <Typography variant="h4">{heading}</Typography>
      <Typography variant="h5">Exercise</Typography>
      <Typography className="indent">
         {question}
      </Typography>
      <TextField name='code' multiline rows={8} sx={{ background: grey[200] }} onChange={onTyping} defaultValue={`
      // add import here if necessary
    public class Main {
  public static void main(String[] args) {
  

    
}
}`} />
      {!isEmpty(displayAnswer) && <Box sx={{color:valid == 'error' ? '#f10000' : ''}}>{displayAnswer}{valid == 'correct' ? <Typography sx={{color:valid == 'error' ? '#ff3333' : '#198754'}} component={'span'}>(Correct)</Typography> : valid == 'incorrect' ? <Typography sx={{color:valid == 'valid' ? '#198754' : '#ff3333',fontWeight:500}} component={'span'}>(Incorrect)</Typography> : ''}</Box>}
      {typing && counter <= 3 && <Box sx={{ display: 'flex', flex: 1, justifyContent: 'end' }}>
        <Button onClick={onRunCompiler} sx={{ background: '#1e7b75', color: '#ffffff', '&:hover': { background: '#1e7b75', color: '#ffffff' } }} variant={'primary'}>Run</Button>
      </Box>
      }

     {!isUndefined(audio1) &&  <SpeechPlayer src={audio1} />}
      
    </Box>
    }

    
    <Box  className="topic-section">

      <Accordion onClick={toggleAnswer}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Answer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              px: '30px',
              background: grey[200],
              borderRadius: '15px',
            }}
          >
            <Typography variant="h5">Code:</Typography>
            <pre>{codeOutput}</pre>

            <Box  className="code-block">
              <Typography variant="h5">Output:</Typography>
              <pre>
               {codeAnswer}
              </pre>
            </Box>
           {!isUndefined(audio2) &&  <SpeechPlayer src={audio2} />}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  </Box>
  )
}

export default Exercise
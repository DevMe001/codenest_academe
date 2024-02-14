import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import SpeechPlayer from '../../components/SpeechPlayer';
import { grey } from '@mui/material/colors';

import audio1 from './audios/act2.1.mp3';
import audio2 from './audios/act2.2.mp3';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Activity2() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">TOPIC 2: DATA TYPESSSSS</Typography>
        <Typography variant="h5">Exercise</Typography>
        <Typography className="indent">
        Write a Java Program to convert temperature from Fahrenheit to Celsius degrees.
        </Typography>
        <TextField multiline rows={8} sx={{ background: grey[200] }} />
        <SpeechPlayer src={audio1} />
      </Box>
      <Box className="topic-section">
     
        <Accordion>
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
              <pre>{`import java.util.Scanner;
public class Exercise1 {

    public static void main(String[] Strings) {

        Scanner input = new Scanner(System.in);

        System.out.print("Input a degree in Fahrenheit: ");
        double fahrenheit = input.nextDouble();

        double  celsius =(( 5 *(fahrenheit - 32.0)) / 9.0);
        System.out.println(fahrenheit + " degree Fahrenheit is equal to 
        " + celsius + " in Celsius");
    }
}
`}</pre>
<Box className="code-block">
<Typography variant="h5">Output:</Typography>
          <pre>
            {`Input a degree in Fahrenheit: 212                                                                             
212.0 degree Fahrenheit is equal to 100.0 in Celsius
`}
          </pre>
        </Box>
<SpeechPlayer src={audio2} />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

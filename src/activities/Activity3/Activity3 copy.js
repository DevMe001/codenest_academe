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

import audio1 from './audios/act3.1.mp3';
import audio2 from './audios/act3.2.mp3';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Activity3() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">TOPIC 3: CONSTANT</Typography>
        <Typography variant="h5">Exercise</Typography>
        <Typography className="indent">
        Write a Java Program to declare constant as private.
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
               <pre>
            {`import java.util.Scanner;  
          public class ConstantExample1   
          {  
           
          private static final double PRICE=234.90;  
          public static void main(String[] args)  
          {  
          int unit;  
          double total_bill;  
          System.out.print("Enter the number of units you have used: ");  
          Scanner sc=new Scanner(System.in);  
          unit=sc.nextInt();  
          total_bill=PRICE*unit;  
          System.out.println("The total amount you have to deposit 
          is: "+total_bill);  
          }  
}  `}
          </pre>

            </Box>

        <Box className="code-block">
<Typography variant="h5">Output:</Typography>
          <pre>
            {`Enter the number of units you have used: 10
The total amount you have to deposit is: 2349.0
`}
          </pre>
        </Box>
        <SpeechPlayer src={audio2} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

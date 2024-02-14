import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';


function createData(escapeSequence, name, unicodeValue) {
  return { escapeSequence, name, unicodeValue };
}


export default function Topic8() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Byte</Typography>
        <Typography className="indent">
        A byte is a series of 8 bits. It is used to represent small numbers. To declare a variable that would hold a natural number between -128 and 127, you can use the byte data type.
        </Typography>
        <Typography>To retrieve the value of a byte variable, apply nextByte() to the Scanner variable.</Typography>
         
       
          </Box>


        <Box className="topic-section">
        <Typography variant="h4">Example:</Typography>
        <Typography className="indent">
        <Box className="code-block">
            <pre>{`
import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner scnr = new Scanner(System.in);
                  byte value;
                
                  System.out.print("Enter a numeric value: ");
                  temperature = scnr.nextByte();
                  
                  System.out.print("The value is: ");
                  System.out.println(value);
              }
          }
`}</pre>
      </Box>

         </Typography>
         </Box>


         <Box className="topic-section">
          <Typography className="indent">
          <Box className="code-block">
              <pre>{`
Output:
        Enter  a numeric value: 28
        Value: 28
  `}</pre>
        </Box>
       
           </Typography>
           </Box>


           <Box className="topic-section">
          
        <Typography variant="h4">Example of Initializing a byte variable:</Typography>
        <Typography>
        To initialize a byte variable, make sure you assign it a number in the appropriate range.
        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
    public static void main(String[]  Zargs) {
        byte temperature = -28;
        System.out.print("Temperature: ");
        System.out.println(temperature);
    }  
}

`}</pre>
      </Box>
    
        
         </Box>


         <Box className="topic-section">
        <Box className="code-block">
            <pre>{`
    This would produce:
    Temperature: -28
`}</pre>
      </Box>
    
        
         </Box>


         <Box className="topic-section">
          <Typography>
          The value assigned to a byte variable must be in the correct range, 
          otherwise you would receive an error. For example, if you assign a value 
          lower than -128 or higher than 127 to a byte variable, the program would not work.
          </Typography>
          <Typography>
          In the parentheses of System.out.print() or System.out.println(), 
          you can concatenate a string a byte variable. To do this, us the 
          + operator between them.:
          </Typography>

          <Box className="code-block">
              <pre>{`public class Exercise {
      public static void main(String[]  Zargs) {
          byte temperature = -28;
          System.out.print("Temperature: ");
          System.out.println(temperature);
      }  
  }`}</pre>
        </Box>
      
          
           </Box>

           <Box className="topic-section">
          <Typography>
          To display the value of a byte variable using System.out.printf(), 
          use the %d expression. Here is an example:
          </Typography>
          
          <Box className="code-block">
              <pre>{`public class Exercise {
    public static void main(String[] args) {
        byte temperature = -28;

        System.out.printf("Temperature: %d", temperature);
    }  
}
`}</pre>
        </Box>
      
          
           </Box>











           

    </Box>
  );
}

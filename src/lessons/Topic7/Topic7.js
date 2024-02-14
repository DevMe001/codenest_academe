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


export default function Topic7() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Introduction to String</Typography>
        <Typography className="indent">
        To make it easy to manage strings, you can "concatenate" one 
        string with another to create a new string. The concatenation 
        is done by adding one string to another, which is done using the 
        addition operator.
         </Typography>
         <Box className="code-block">
            <pre>{`public class Exercise {

         public static void main(String[] args) {        
             String firstName = "Charlotte ";
             String lastName  = "Webster";
             String fullName  = firstName + lastName;
    
             System.out.print("Full Name: ");
             System.out.print(fullName);
           }
         }
`}</pre>
        
          </Box>
          </Box>
          <Box className="topic-section">
        <Typography className="indent">
        You can concatenate as many strings as you want, using 
        the addition operator the same way you would in algebra. 
        When writing System.out.print("First Name: ");, the First Name 
        value is a string. This allows you to also add strings locally 
        where they are used, such as in the print() method.
        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {

        public static void main(String[] args) {
            String firstName = "Charlotte";
            String strSeparator = ", ";
            String lastName  = "Webster";
    
            System.out.print("Full Name: " + lastName + strSeparator + firstName);
          }
        }
`}</pre>
         </Box>
         
         </Box>
    </Box>
  );
}

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


export default function Topic9() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Integer</Typography>
        <Typography className="indent">
        An integer is simply a natural number. An integer is a 
        variable whose values are between -2,147,483,648 and 
        2,147,484,647. The value is also said to fit in a 32-bit range. 
        To declare a variable that would hold numbers of that range, use the int keyword.
        </Typography>
      
        <Typography variant="h6">Example of retrieve the value a variable of type int, apply nextInt() to the Scanner variable. :</Typography>
        <Box className="code-block">
            <pre>{`import java.util.Scanner;

          public class Exercise {
              public static void main(String[] args) {
                  Scanner scnr = new Scanner(System.in);
                  int days;
                  
                  System.out.print("Enter number of days: ");
                  days = scnr.nextInt();
                  System.out.print("Days Passed: ");
                  System.out.println(days);
              }
          }
`}</pre>
      </Box>
      
          </Box>


          <Box className="topic-section">
          <Box className="code-block">
            <pre>{`Output:
          Enter number of days: 42
          Days Passed: 42
`}</pre>
      </Box>
     
      </Box>


      <Box className="topic-section">
        
        <Typography>
        After declaring an int variable, to initialize it, assign a number to it.:
        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
          public static void main(String[] args) {
              int days = 468;
              System.out.print("Days Passed: ");
              System.out.println(days);
          }
        }
`}</pre>
      </Box>
    
          </Box>


          <Box className="topic-section">
        
        <Typography>
        In the parentheses of System.out.print() or System.out.println(), 
        you can concatenate a string and a natural number. To do this, use the + operator.

        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
          public static void main(String[] args) {
              int days = 468;
              System.out.print("Days Passed: " + days);
          }
      } 
`}</pre>
      </Box>
     
          </Box>


          <Box className="topic-section">
        
        <Typography>
        Instead of a normal decimal number, you can initialize 
        an int variable with a hexadecimal number. The number must be preceded with 0x. 

        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
        public static void main(String[] args) {
            int number = 0xA2EE;
            System.out.print("Number: " + number);
        }
    }
`}</pre>
      </Box>
      
          </Box>
     
          
          <Box className="topic-section">
          <Box className="code-block">
            <pre>{`This would produce:
Number: 41710
`}</pre>
      </Box>
   
      </Box>




      <Box className="topic-section">
        
        <Typography>
        To display the value of an int variable using System.out.printf(), 
        use the %d  format to represent a character variable. Here is an example:
        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
          public static void main(String[] args) {
              int number = 41710;
              System.out.printf("Number: %d", number);
         }
      }
`}</pre>
      </Box>
     
          </Box>


          <Box className="topic-section">
        
        <Typography>
        To display the number in hexadecimal format, use the %x or %X expression. 
        Here is an example:
        </Typography>
        <Box className="code-block">
            <pre>{`public class Exercise {
           public static void main(String[] args) {
                int number = 41710;
                System.out.printf("Number: %x", number);
            }
        }
`}</pre>
      </Box>
    
          </Box>
     
          
          <Box className="topic-section">
          <Box className="code-block">
            <pre>{`This would produce:
Number: a2ee
`}</pre>
      </Box>
    
      </Box>


        <Box className="topic-section">
        
        <Typography>
        As you can see, if you use %x, the characters in the result 
        would appear in lowercase. If you want the characters to appear 
        in uppercase, use %X.

        </Typography>
        
     
          </Box>  

          

    </Box>
  );
}

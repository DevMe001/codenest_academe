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

  
  export default function Topic5() {
    return (
      <Box className="topic-container">
        <Box className="topic-section">
          <Typography variant="h4">Introduction to String</Typography>
          <Typography className="indent">
          A string is one or more characters considered as a single value. 
          Everything entered in a program, requested from the user, or displayed 
          as a series of characters is primarily a string. To support strings, Java
           is equipped with the String class. To declare a variable that would hold a 
           string, use the String data type.
           </Typography>
           
           <Typography className="indent">
           To retrieve a string, you can apply next() to your Scanner class. 
           </Typography>
         
        </Box>
        <Box className="topic-section">
          <Typography variant="h4">Example of retrieving a string:</Typography>
          
          <Box className="code-block">
            <pre>{`import java.util.Scanner;

        public class Main {
              public static void main(String[] args) {
                Scanner scnr = new Scanner(System.in);
                String nick;
              
                System.out.print("Enter your nick: ");
                  firstName = scnr.next();

                System.out.print("Nick Name: ");
                  System.out.print(nick);
              }
        }`}</pre>
          </Box>
        
          <Box className="code-block">
            <pre>{`
Here’s the output:

        Enter your nick name: Charles 
        Nick Name: Charles`}</pre>
          </Box>
       
          </Box>
        <Box className="topic-section">
        <Typography>
          next() is used to get only one word that is considered 
          terminated by an empty space. To retrieve a string made of 
          different words, you must assume that it would be terminated 
          by a new line. To get such a string, use nextLine().
          </Typography>
          <Typography>
          To initialize a String variable, assign it a double-quoted value.
           </Typography>
         
      </Box>
      <Typography>
      <Box className="code-block">
            <pre>{`
          public class Exercise {
            public static void main(String[] args) {        
                String firstName = "Charles";
            }
          }
          `}</pre>
          </Box>
          </Typography>
          <Box className="topic-section">
          <Typography className="indent">
    To display the value of a string, you can pass the name of variable to theSystem.out.print() method.
          </Typography>
          <Box className="code-block">
            <pre>{`
      public class Exercise {

         public static void main(String[] args) {        
             String firstName = "Charles";
                
             System.out.print("First Name: ");
             System.out.print(firstName);
         }
     }`}</pre>
          </Box>
       
          </Box>
          <Box className="topic-section">
          <Typography className="indent">
          As an alternative, to display a string using System.out.printf(), add a %s expression in the double-quotes as the placeholder of the variable.
          </Typography>
          <Box className="code-block">
            <pre>{`
      public class Exercise {
        public static void main(String[] args) {
      String fullName = "Charlotte Webster";
    
            System.out.printf("Full Name: %s", fullName);
        }
    }`}</pre>
          </Box>
         
          <Box className="code-block">
            <pre>{`This would produce:

        Full Name: Charlotte Webster`}</pre>
        
          </Box>
          </Box>
          



      </Box>
    );
  }
  
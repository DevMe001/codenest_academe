import { Box, Typography } from '@mui/material';


export default function Topic3() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Constant</Typography>
        <Typography className="indent">
          A constant variable is one whose value is fixed once it has been
          initialized. The final keyword, which denotes that the variable's
          value is fixed and cannot be changed, is used to define constant
          variables. Constants are frequently employed for values that have to
          endure over the course of a program.
        </Typography>
        
      </Box>
      <Box className="topic-section">
        <Typography variant="h5">
          Here's the syntax for declaring a constant variable:
        </Typography>
        <Box className="code-block">
          <pre>{`final data_type VARIABLE_NAME = initial_value;`}</pre>
        </Box>
        <Typography variant="h6">Data type:</Typography>
        <Typography className="indent">
          Like any other variable, this indicates the kind of data that will be
          held by the constant.
        </Typography>
        <Typography variant="h6">Variable Name:</Typography>
        <Typography className="indent">
          This is the constant variable's name, as per Java's naming guidelines.
        </Typography>
        <Typography variant="h6">Initial Value:</Typography>
        <Typography className="indent">
          This is the constant's initial value, which is set when the variable
          is declared. This value cannot be modified after being assigned.
        </Typography>
        
      </Box>
      <Box className="topic-section">
        <Typography variant="h5">
          Example of declaring constant variables:
        </Typography>
        <Box className="code-block">
          <pre>{`final int MAX_VALUE = 100;
final double PI = 3.14159;
final String APP_NAME = "MyApp";
`}</pre>
        </Box>
        <Typography className="indent">
          Constants are frequently used for numbers that shouldn't change,
          including setup settings, mathematical constants and values that are
          utilized throughout your code. Because you know the values won't be
          unintentionally changed, designating them as constants makes your code
          easier to read, maintain, and write.
        </Typography>
       
      </Box>
      <Box className="topic-section">
        <Typography variant="h5">Example of using a class constant:</Typography>
        <Box className="code-block">
          <pre>{`public class ConstantExample {
    public static void main(String[] args) {
    // Declare and initialize a constant integer variable
    final int MAX_VALUE = 100;
    // Attempting to change the value will result in a compilation error
    // MAX_VALUE = 200; // Error: Cannot assign a value to final variable 'MAX_VALUE'
    // Display the constant value
    System.out.println("Maximum Value: " + MAX_VALUE);
    // Declare and initialize a constant double variable
    final double PI = 3.14159;
    // Display the constant value
    System.out.println("Value of Pi: " + PI);
    // Declare and initialize a constant string variable
    final String APP_NAME = "MyApp";
    // Display the constant value
    System.out.println("Application Name: " + APP_NAME);
  }
}`}</pre>
        </Box>
        <Typography className="indent">In this example:</Typography>
        <Typography className="indent">
          MAX_VALUE, PI, and APP_NAME are three constant variables that we
          declare and initialize.
        </Typography>
        <Typography className="indent">
          Since MAX_VALUE is a constant variable, every attempt to alter its
          value causes a compilation error.
        </Typography>
        <Typography className="indent">
          System.out.println() is used to display the values of the constant
          variables.
        </Typography>
        <Typography className="indent">
          The final keyword is used to declare constant variables, which are
          used to store values that shouldn't change while the program is
          running. A compilation error will occur if you try to change the value
          of a constant variable.
        </Typography>
       
      </Box>
    </Box>
  );
}

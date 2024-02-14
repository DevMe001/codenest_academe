import { Box, Typography } from '@mui/material';



export default function Topic1() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Java Syntax</Typography>
        <Typography className="indent">
          The syntax of Java plays a pivotal role in shaping the structure and
          interpretation of Java programs. This syntax is primarily inherited
          from the C and C++ programming languages, offering a familiar
          framework for developers transitioning to Java. However, Java exhibits
          notable distinctions from C++.
        </Typography>
        <Typography className="indent">
          One fundamental difference is the absence of global functions or
          variables in Java. While C++ allows the use of global functions and
          variables, Java enforces a more structured approach by confining all
          code within classes. This approach enhances code organization and
          modularity.
        </Typography>
       
      </Box>
      <Box className="topic-section">
        <Typography variant="h5">Basic Syntax</Typography>
        <Typography variant="h6">Class Name</Typography>
        <Typography className="indent">
          The "main class" is a Java class that contains the main method. The
          class is declared using the class keyword.
        </Typography>
        <Box className="code-block">
          <pre>
            {`public class MainClass {
  // Class members and methods go here.
}`}
          </pre>
        </Box>
        <Typography variant="h6">Main Method (Entry Point)</Typography>
        <Typography className="indent">
          The main method is the entry point of a Java program and is used to
          start program execution.
        </Typography>
        <Box className="code-block">
          <pre>
            {`public static void main(String[] args) {
  // Main program logic here
}`}
          </pre>
        </Box>
        <Typography variant="h6">Method Declaration</Typography>
        <Typography>
          <ol>
            <li>
              A method with no parameters and no return value
              <Box className="code-block">
                <pre>
                  {`public void greet() {
  System.out.println("Hello!");
}`}
                </pre>
              </Box>
            </li>
            <li>
              A method with parameters and a return value
              <Box className="code-block">
                <pre>{`public int add(int a, int b) {
  return a + b;
}`}</pre>
              </Box>
            </li>
          </ol>
        </Typography>
       
      </Box>

      <Box className="topic-section">
        <Typography variant="h5">Example</Typography>
        <Typography className="indent">
          Simple Java program that includes a class with a main method (the
          entry point) and another custom method
        </Typography>
        <Box className="code-block">
          <pre>
            {`public class MainClass {
  // Custom method that adds two numbers and prints the result
  public static int add(int a, int b) {
    int sum = a + b;
    return sum;
  }
  public static void main(String[] args) {
    // Calling the custom method and storing the result
    int result = add(5, 7);
    // Printing the result
    System.out.println("The sum is: " + result);
    // You can add more code here for your main program logic.
  }
}`}
          </pre>
        </Box>
        

        <Typography sx={{ pl: '30px' }}>
          This simple Java program does the following:
          <Typography sx={{ pl: '15px' }}>
            <ol>
              <li>It defines a class called MainClass.</li>
              <li>
                Inside the class, there is a custom method named add that takes
                two integer parameters and returns their sum.
              </li>
              <li>
                The main method is the entry point of the program. It calls the
                add method with the arguments 5 and 7 and stores the result in a
                variable called result.
              </li>
              <li>
                Finally, it prints the result to the console using
                System.out.println.
              </li>
            </ol>
          </Typography>
          You can save this code to a .java file, compile it using the javac
          command, and then run it using the java command. This program
          demonstrates the basic syntax for defining a class and methods in
          Java. You can build upon this foundation to create more complex Java
          applications.
        </Typography>
     
      </Box>
    </Box>
  );
}

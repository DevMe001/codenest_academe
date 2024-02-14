import { Box, Typography } from '@mui/material';




export default function Topic2() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Data Types</Typography>
        <Typography className="indent">
          A data type is a classification or categorization of data based on its
          features and the actions that may be done on it. Data types specify
          the nature of the data that a variable or object can carry, as well as
          the operations that can be performed on that data. Data types are
          important because they allow the compiler or interpreter to understand
          how to allocate memory for the data as well as how to interpret and
          modify it.
        </Typography>
        <Typography className="indent">
          In most programming languages, including Java, data types fall into
          two main categories: Primitive Data Types and Reference Data Type.
        </Typography>
       
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">Primitive Data Types</Typography>
        <Typography className="indent">
          These are the most fundamental data types in Java. They represent
          simple values and are used to store data directly.
        </Typography>
        <Typography className="indent">
          Java has eight primitive data types
        </Typography>
        <Typography>
          <ul>
            <li>byte: 8-bit signed integer.</li>
            <li>short: 16-bit signed integer.</li>
            <li>int: 32-bit signed integer.</li>
            <li>long: 64-bit signed integer.</li>
            <li>float: 32-bit floating-point number.</li>
            <li>double: 64-bit floating-point number.</li>
            <li>char: 16-bit Unicode character.</li>
            <li>boolean: Represents true or false values.</li>
          </ul>
        </Typography>
    
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">Reference Data Types</Typography>
        <Typography className="indent">
          References to objects and intricate data structures are stored in
          reference data types. They don't hold the data themselves; rather,
          they serve as a pointer to the data's storage place in memory.
        </Typography>
        <Typography className="indent">
          <ul>
            <li>Classes: User-defined classes.</li>
            <li>Interfaces: Blueprint for classes to implement.</li>
            <li>Arrays: Collections of elements of the same data type.</li>
            <li>
              Enums: Special data types to define a collection of constants.
            </li>
            <li>Other user-defined reference types.</li>
          </ul>
        </Typography>
      
      </Box>

      <Box className="topic-section">
        <Typography variant="h6">Examples of Primitive Data Types:</Typography>
        <Typography className="list">
          <ul>
            <li>
              Int - Used for storing whole numbers.
              <Typography>
                int age = 30;
                <br />
                int numberOfStudents = 100;
              </Typography>
            </li>

            <li>
              Double - Used for representing floating-point numbers (decimals).
              <Typography>
                double pi = 3.14159;
                <br />
                double price = 19.99;
              </Typography>
            </li>

            <li>
              Char - Represents a single Unicode character.
              <Typography>
                char grade = 'A';
                <br />
                char symbol = '$';
              </Typography>
            </li>

            <li>
              Boolean - Represents true or false values.
              <Typography>
                boolean isStudent = true;
                <br />
                boolean isValid = false;
              </Typography>
            </li>

            <li>
              Byte - Used for storing small integers.
              <Typography>
                byte temperature = 25;
                <br />
                byte numberOfEmployees = 127;
              </Typography>
            </li>

            <li>
              Short - Used for small to moderately-sized integers.
              <Typography>
                short population = 20000;
                <br />
                short distanceInMeters = 1500;
              </Typography>
            </li>

            <li>
              Long - Used for very large integers.
              <Typography>
                long bigNumber = 1234567890L;
                <br />
                long totalPopulation = 7_800_000_000L;
              </Typography>
            </li>
          </ul>
        </Typography>
       
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">Examples of Reference Data Types:</Typography>
        <Typography className="list">
          <ul>
            <li>
              String - The String class is a reference data type that represents
              sequences of characters. Strings are widely used for working with
              text data.
              <Typography>
                String name = "Alice";
                <br />
                String address = "123 Main Street";
              </Typography>
            </li>

            <li>
              Arrays - Arrays allow you to store multiple values of the same
              data type in a single variable. Arrays can be of primitive data
              types or reference data types.
              <Typography>
                {`int[] numbers = {(1, 2, 3, 4, 5)};`}
                <br />
                {`String[] names = {('Alice', 'Bob', 'Charlie')};`}
              </Typography>
            </li>

            <li>
              Classes - Classes are user-defined reference data types that can
              have attributes (fields) and methods. Instances of classes are
              created as objects.
              <Box className="code-block">
                <pre>{`class Person {
  String name;
  int age;
}

Person person1 = new Person();
person1.name = "Alice";
person1.age = 30;

Person person2 = new Person();
person2.name = "Bob";
person2.age = 25;`}</pre>
              </Box>
            </li>

            <li>
              Interfaces - Interfaces define a contract for classes to implement
              specific methods. Classes that implement an interface provide
              concrete implementations for those methods.
              <Box className="code-block">
                <pre>{`interface Shape {
  double calculateArea();
}
class Circle implements Shape {
  double radius;
  public Circle(double r) {
    radius = r;
  }
  public double calculateArea() {
    return Math.PI * radius * radius;
  }
}`}</pre>
              </Box>
            </li>

            <li>
              Enums - Enumerations (enums) are used to define a fixed set of
              constant values. Enums improve code readability by using
              meaningful labels for values.
              <Box className="code-block">
                <pre>{`enum Day {
  SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, 	SATURDAY
}
Day currentDay = Day.MONDAY;`}</pre>
              </Box>
            </li>
          </ul>
        </Typography>
        
      </Box>
    </Box>
  );
}

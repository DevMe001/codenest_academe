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

const rows = [
  createData(`b`, 'backspace', 'u0008'),
  createData('t', 'Tab', 'u0009'),
  createData('n', 'Linefeed', 'u000a'),
  createData('r', 'carriage return', 'u000d'),
  createData('"', 'double quote', 'u0022'),
  createData(`'`, 'singlequote', 'u0027'),
  createData('\\', 'backslash', 'u005c'),
];

export default function Topic4() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">The Character Type</Typography>
        <Typography className="indent">
          First, single quotes are used to denote char constants. For example,
          'H' is a character. It is different from "H", a string containing a
          single character. Second, the char type denotes characters in the
          Unicode encoding scheme. You may not be familiar with Unicode, and,
          fortunately, you don't need to worry much about it if you don't
          program international applications. (Even if you do, you still won't
          have to worry about it too much because Unicode was designed to make
          the use of non-Roman characters easy to handle.)
        </Typography>
        <Typography className="indent">
          Because Unicode was designed to handle essentially all characters in
          all written languages in the world, it is a 2-byte code. This allows
          65,536 characters, of which about 35,000 are currently in use. This is
          far richer than the ASCII code set, which is a 1-byte code with 128
          characters, or the commonly used ISO 8859-1 extension with 256
          characters. That character set (which some programmers call the
          “Latin-1” character set) is a subset of Unicode. More precisely, it is
          the first 256 characters in the Unicode coding scheme. Thus, character
          codes like 'a', '1', '[' and 'ä' are valid Unicode characters with
          character codes &lt; 256. Unicode characters have codes between 0 and
          65535, but they are usually expressed as hexadecimal values that run
          from '\u0000' to '\u FFFF' (with '\u0000' to '\u00FF' being the
          ordinary ISO 8859-1 characters). The \u prefix indicates a Unicode
          value, and the four hexadecimal digits tell you what Unicode
          character.
        </Typography>
        <Typography className="indent">
          Besides the \u escape character that indicates the encoding of a
          Unicode character, there are several escape sequences for special
          characters shown in Table 1.3
        </Typography>
        
      </Box>
      <Box className="topic-section">
        <Typography variant="h6" textAlign="center">
          Table 1.3 Java Character Type
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Escape Sequence</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Unicode Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">\{row.escapeSequence}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">\{row.unicodeValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">The Boolean Type</Typography>
        <Typography className="indent">
          The boolean type has two values, false and true. It is used for
          evaluating logical conditions. You cannot convert between integers and
          boolean values.
        </Typography>
        <Typography variant="h6">Data Input/Output</Typography>
        <Typography className="indent">
          In Java, you can obtain user input from the console or through
          graphical user interfaces. Here's how to get user input from the
          console using the Scanner class, which is a common approach.
        </Typography>
        <Typography className="indent">
          The Scanner class is used to get user input, and it is found in the
          java.util package.
        </Typography>
        
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">Example</Typography>
        <Box className="code-block">
          <pre>{`import java.util.Scanner;
Scanner scanner = new Scanner(System.in);`}</pre>
        </Box>
        <Typography className="list">
          To read various types of user input, you can use the following methods
          of the Scanner class
          <ul>
            <li>nextLine(): Reads a line of text (including spaces).</li>
            <li>nextInt(): Reads an integer.</li>
            <li>nextDouble(): Reads a double.</li>
            <li>nextBoolean(): Reads a boolean value.</li>
            <li>
              next() or nextToken(): Reads a single word (token) without spaces.
            </li>
          </ul>
        </Typography>
      
      </Box>
      <Box className="topic-section">
        <Typography variant="h6">
          Example of how to use Scanner to read user input:
        </Typography>
        <Box className="code-block">
          <pre>{`Scanner scanner = new Scanner(System.in);

System.out.print("Enter your name: ");
String name = scanner.nextLine();

System.out.print("Enter your age: ");
int age = scanner.nextInt();

System.out.println("Hello, " + name + "! You are " + age + " years old.");

// Don't forget to close the scanner when you're done with it.
scanner.close();
`}</pre>
        </Box>
     
      </Box>
    </Box>
  );
}

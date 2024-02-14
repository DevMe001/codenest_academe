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
  createData('\ a', 'Bell (alert)', 'Makes a sound from the computer'),
  createData('\ b', 'Backspace', 'Takes the cursor back'),
  createData('\ t', 'Horizontal Tab', 'Takes the cursor to the next tab stop'),
  createData('\ n', 'New line', 'Takes the cursor to the beginning of the next line'),
  createData('\ v', 'Vertical Tab', 'Performs a vertical tab'),
  createData('\ f', 'Form feed', ''),
  createData('\ r', 'Carriage return', 'Causes a carriage return'),
  createData('\"', 'Double Quote', 'Displays a quotation mark (")'),
  createData('\'', 'Apostrophe', 'Displays an apostrophe '),
  createData('\?', 'Question mark', 'Displays a question mark'),
  createData('\\', 'Backslash', 'Displays a backslash (\)'),
  createData('\0', 'Null', 'Displays a null character'),
];

export default function Topic6() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Escape Sequence</Typography>
        <Typography className="indent">
        An escape sequence is a special character that displays non-visibly. 
        You use this type of character to indicate the end of line, that is, 
        to ask the program to continue on the next line. An escape sequence 
        is represented by a backslash character, \, followed by another 
        character or symbol. 
       
        </Typography>
        </Box>

        <Box className="topic-section">
        <Typography variant="h4">Example</Typography>
        <Typography className="indent">The escape sequence that moves to the next line is \n.</Typography>
        <Typography>An escape can be included in single-quotes as in '\n', in double-quotes as "\n", or as part of a string.
        
        </Typography>
        
        <Typography>
        The Java language recognizes other escape sequences:
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
                <TableCell align="center">Description</TableCell>
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
      
      </Box>
  );
}
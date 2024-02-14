import { Box, Typography } from '@mui/material';



export default function Introduction() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">Introduction</Typography>
        <Typography className="indent">
          Java goes back to 1991, when a group of Sun engineers, led by Patrick
          Naughton and Sun Fellow (and all-around computer wizard) James
          Gosling, wanted to design a small computer language that could be used
          for consumer devices like cable TV switch boxes. Since these devices
          do not have a lot of power or memory, the language had to be small and
          generate very tight code. Also, because different manufacturers may
          choose different central processing units (CPUs), it was important not
          to be tied down to any single architecture. The project got the code
          name “Green.”
        </Typography>
        <Typography className="indent">
          The requirements for small, tight, and platform-neutral code led the
          team to resurrect the model that some Pascal implementations tried in
          the early days of PCs. What Niklaus Wirth, the inventor of Pascal, had
          pioneered, and UCSD Pascal did commercially, was to design a portable
          language that generated intermediate code for a hypothetical machine.
          (These are often called virtual machines—hence, the Java Virtual
          Machine or JVM.) This intermediate code could then be used on any
          machine that had the correct interpreter. The Green project engineers
          used a virtual machine as well, so this solved their main problem.
        </Typography>
        <Typography className="indent">
          The Sun people, however, come from a UNIX background, so they based
          their language on C++ rather than Pascal. In particular, they made the
          language object oriented rather than procedure oriented. But, as
          Gosling says in the interview, “All along, the language was a tool,
          not the end.” Gosling decided to call his language “Oak.” The people
          at Sun later realized that Oak was the name of an existing computer
          language, so they changed the name to Java. In 1992,
        </Typography>
      
      </Box>
    </Box>
  );
}

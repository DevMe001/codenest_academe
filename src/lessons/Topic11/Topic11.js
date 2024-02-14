import { Box, Typography } from '@mui/material';



export default function Topic11() {
  return (
    <Box className="topic-container">
      <Box className="topic-section">
        <Typography variant="h4">SUPPLEMENTARY</Typography>
        <Typography variant="h5">INFORMATION:</Typography>
        <Typography>
        Java Syntax is a basic of the language, all the main rules,
         commands, constructions to write programs that the compiler 
         and computer “understands”. 
        </Typography>

        <Typography>
        Every programming language has 
         its syntax as well as human language.
         </Typography>

        <Typography>
        This article focuses on the basic syntax of the Java programming language and is 
         intended for novice developers or those who know another 
         programming language. Some aspects may not be clear to beginners. 
          </Typography> <Typography>
          If so, it is best to skip them and focus on examples. 
         As in everything else, it is better to learn a programming 
         language cyclically, gradually coming to a deeper understanding 
         of certain concepts.</Typography>

          <Typography>
          Every Java program is a bunch of objects 
         that incorporate each other with data (variables) and behavior 
         (functions or methods). Also, the Java program is a class or a 
         few classes. An object is an instance of a class. 
          </Typography>
          <Typography>
          You can understand
          class as a model, for example, cookie cutters and objects like cookies. 
          Or class as an abstract “Java programmer” and object as “Java Programmer 
          John” or “Java Programmer Ivy”.  
          </Typography>

          <Typography variant="h5">Object in Java</Typography>
          <Typography>
          Objects in Java have states and behaviors. 
          </Typography>

          <Typography>
          Example: A cat has states: its name is Furr, color is red, owner is John; cat also has behavior Now Furr is sleeping. He could also purr, walk, and so on. An object is an instance of a class.
          </Typography>
          
          <Typography variant="h5">Class in Java</Typography>
          <Typography>
          Class is a model or template or blueprint of the object. 
          It describes the behavior and states that the object of its type supports. 
          </Typography>
          <Typography>
          For example, the Cat class has its name, color, owner; cat also has behavior 
          such as eating, purring, walking, sleeping.
          </Typography>
      </Box>
      
    </Box>
  );
}

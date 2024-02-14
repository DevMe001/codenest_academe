const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const cors =  require('cors');

const app = express();

app.use(cors());

// important this ti return data to json
app.use(express.json());

app.get('/api/exercise1', (req, res) => {
   const javaCode = `
   public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
    }
 `;
 executable(javaCode,req,res)
});



app.post('/runnable/exec',(req,res)=>{

  const javacode = req.body.javaCode;
  // res.json(JSON.stringify({code:javacode}));
   executable(javacode,req,res)
})



app.get('/api/exercise2', (req, res) => {
     // Extract the value from the query parameter (if provided)
     const inputValue = req.query.value || '';
  
    const javaCode = `
    import java.util.Scanner;

    public class Main {
        public static void main(String[] args) {
            // Convert the input value to a double
            double inputValue = ${inputValue};

            // Create a Scanner object to read input from the user
            Scanner input = new Scanner(System.in);

            System.out.print("Input a degree in Fahrenheit: ");
            double fahrenheit = inputValue != 0 ? inputValue : input.nextDouble();

            double celsius = ((5 * (fahrenheit - 32.0)) / 9.0);
            System.out.println(fahrenheit + " degree Fahrenheit is equal to " + celsius + " in Celsius");
        }
    }
  `;

  executable(javaCode,req,res)
});


function executable(javaCode,req,res){
     // Write the Java code to a file
     fs.writeFile('Main.java', javaCode, (err) => {
       if (err) {
         console.error(`Error writing Java code to file: ${err}`);
         res.json({ error: 'An error occurred while writing Java code to file',answer:'incorrect' });
         return;
       }
   
       // Compile the Java code
       exec('javac Main.java', (error, stdout, stderr) => {
         if (error) {
           console.error(`Error compiling Java code: ${error}`);
           console.error(`stderr: ${stderr}`);
           res.json({ error: 'An error occurred while compiling Java code',answer:'incorrect', stderr });
           return;
         }
   
         // Execute the compiled Java code
         exec(`java Main`, (error, stdout, stderr) => {
           if (error) {
             console.error(`Error executing Java code: ${error}`);
             console.error(`stderr: ${stderr}`);
             res.json({ error: 'An error occurred while executing Java code', stderr ,answer:'incorrect'});
             return;
           }
 
           fs.unlink('Main.java', (err) => {
             if (err) {
             console.error(`Error deleting Java file: ${err}`);
             }
         });
             
             fs.unlink('Main.class', (err) => {
                 if (err) {
                 console.error(`Error deleting class file: ${err}`);
                 }
             });
             
 
   
           // If there were no errors, respond with the output
           res.json({answer:stdout});
         });
       });
     });
}
  

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

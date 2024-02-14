const { exec } = require('child_process');
const fs = require('fs');
const express = require('express');
const cors =  require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.post('/runnable/exec', (req, res) => {
    const javaCode = req.body.javaCode;
    const userInput = req.body.userInput;

    // Write Java code to a file (e.g., Main.java)
    fs.writeFile('Main.java', javaCode, (err) => {
        if (err) {
            console.error(`Error writing Java code to file: ${err}`);
            res.json({ error:  `An error occurred while executing Java code ${err}` ,answer:'error'});
            return;
        }

        // Compile Java code
        exec('javac Main.java', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error compiling Java code: ${error}`);
                console.error(`stderr: ${stderr}`);
                res.json({ error:  `An error occurred while executing Java code ${stderr.replace('Main.java:3:','')}`, message:stderr,answer:'error'});
                return;
            }

            // Execute Java code
            const command = `java Main`;
            const childProcess = exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing Java code: ${error}`);
                    console.error(`stderr: ${stderr}`);
                    res.json({ error: `An error occurred while executing Java code ${stderr.replace('Main.java:3:','')}`, message:stderr,answer:'error' });
                    return;
                }

                res.json({ answer: stdout.replace('\r\n','') });
            });

            // Provide user input if needed
            if (userInput) {
              childProcess.stdin.write(userInput.toString()); // Ensure userInput is a string
              childProcess.stdin.end();
          }

          
        });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

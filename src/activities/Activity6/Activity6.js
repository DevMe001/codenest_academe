import Exercise from '../../activity-wrapper/exercises.component';


export default function Activity6() {
 
  const codeOutput = `
  public class Main {
    public static void main(String[] args) { 
      
     System.out.println("He said \"Java is fun unlimited\"");
      }
    }
    
  `;
  
   const codeAnswer = `He said "Java is fun unlimited"`;
  
   const question = `Create a program where we will print the quoted message using escape sequence.`;
  
  return (
    <Exercise heading={'TOPIC 6: ESCAPE SEQUENCE'} question={question}  codeOutput={codeOutput} codeAnswer={codeAnswer}  newInputValue={0} questionNo={6}/>
  );
  
  
  }

  
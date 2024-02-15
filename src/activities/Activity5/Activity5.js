import Exercise from '../../activity-wrapper/exercises.component';
import audio2 from '../audios/audio-output.mp3';


export default function Activity5() {
 
  const codeOutput = `
  public class Main {
    // Define the main method.
    public static void main(String[] args) {
        // Declare and initialize two string variables, str1 and str2.
        String str1 = "PHP Exercises and Python Exercises";
        String str2 = "and";
        
        // Print the original string.
        System.out.println("Original String: " + str1);
        // Print the specified sequence of char values.
        System.out.println(" Specified sequence of char values: " + str2);
        
        // Check if str1 contains the sequence specified in str2 and print the result.
        System.out.println(str1.contains(str2));
    }
}
  `;
  
   const codeAnswer = `Original String: PHP Exercises and Python Exercises  Specified sequence of char values: and true`;
  
   const question = `Write a Java program to test if a given string contains the specified sequence of char values.`;
  
  return (
    <Exercise heading={'TOPIC 5: INTRODUCTION TO STRING'} question={question} audio2={audio2}  codeOutput={codeOutput} codeAnswer={codeAnswer}  newInputValue={0} questionNo={5}/>
  );
  
  
  }

  
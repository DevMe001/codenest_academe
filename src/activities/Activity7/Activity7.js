import Exercise from '../../activity-wrapper/exercises.component';
import audio2 from '../audios/audio-output.mp3';


export default function Activity7() {
 
  const codeOutput = `
  public class Main {
    public static void main(String[] args) {
      // Declare and initialize two string variables, str1 and str2.
      String str1 = "PHP Exercises and ";
      String str2 = "Python Exercises";
      
      // Print the first string.
      System.out.println("String 1: " + str1);
      // Print the second string.
      System.out.println("String 2: " + str2); 
     
      // Concatenate the two strings together and store the result in str3.
      String str3 = str1.concat(str2);

      // Display the newly concatenated string.
      System.out.println("The concatenated string: " + str3);
  }
}
    
  `;
  
  
   const codeAnswer = `String 1: PHP Exercises and String 2: Python Exercises The concatenated string: PHP Exercises and Python Exercises`;
  
   const question = `Write a Java program to concatenate a given string to the end of another string. `;
  
  return (
    <Exercise heading={'TOPIC 7: STRING CONCATENATION'} question={question} audio2={audio2}  codeOutput={codeOutput} codeAnswer={codeAnswer}  newInputValue={0} questionNo={7}/>
  );
  
  
  }

  
import Exercise from '../../activity-wrapper/exercises.component';
import audio2 from '../audios/audio-output.mp3';

export default function Activity4() {
 
  const codeOutput = `
  public class Main {
    
    // Define the main method.
    public static void main(String[] args) {
        // Declare and initialize a string variable.
        String str = "The quick brown fox jumps over the lazy dog.";

        // Replace all the 'd' characters with 'f' characters.
        String new_str = str.replace('d', 'f');

        // Display the original and modified strings for comparison.
        System.out.println("Original string: " + str);
        System.out.println("New String: " + new_str);
    }
}
  `;
  
   const codeAnswer = `Original string: The quick brown fox jumps over the lazy dog.  
New String: The quick brown fox jumps over the lazy fog.`;
  
   const question = ` Write a program to replace a specified character with another character.`;
  
  return (
    <Exercise heading={'TOPIC 4: THE CHARACTER TYPE'} question={question} audio2={audio2}  codeOutput={codeOutput} codeAnswer={codeAnswer}  newInputValue={0} questionNo={4}/>
  );
  
  
  }

  
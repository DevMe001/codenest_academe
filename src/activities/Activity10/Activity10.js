import Exercise from '../../activity-wrapper/exercises.component';
import audio2 from '../audios/audio-output.mp3';


export default function Activity10() {
 
  const codeOutput = `
  import java.util.Scanner;
  public class Main
  {
    public static void main(String[] args)
    {
      Scanner input = new Scanner(System.in);
      String str;
      short short_val = 0;
   
     
      short_val = input.nextShort();

      System.out.print("Enter the Short Value : " + short_val);
   
      //Convert short integer to string
      str = Short.toString(short_val);
      System.out.println("String Value : " + str);
    }
  }
  
    
  `;
  
   const codeAnswer = `Enter the Short Value : 124 String Value : 124`;
  
   const question = `Write Java program to Convert a short integer into a string.`;
  
  return (
    <Exercise heading={'TOPIC 10: Short'} question={question}  codeOutput={codeOutput} audio2={audio2} codeAnswer={codeAnswer}  newInputValue={124} questionNo={10}/>
  );
  
  
  }

  
import Exercise from '../../activity-wrapper/exercises.component';
import audio2 from '../audios/audio-output.mp3';


export default function Activity8() {
 
  const codeOutput = `
  import java.util.Scanner;
  public class Main {
    public static void main(String[] args)
    {
      Scanner input = new Scanner(System.in);
      String str;
      byte byte_val = 0;
       byte_val = input.nextByte();

      System.out.print("Enter the Byte Value : " +byte_val );
 
   
      //Convert byte to string
      str = Byte.toString(byte_val);
      System.out.println("String value : " + str);
    }
}
    
    
  `;
  
   const codeAnswer = `"Enter the Byte Value : 23 String value : 23`;
  
   const question = `Write Java program to Convert byte into the string.`;
  
  return (
    <Exercise heading={'TOPIC 8: Bytes'} question={question}  codeOutput={codeOutput} audio2={audio2} codeAnswer={codeAnswer}  newInputValue={23} questionNo={8}/>
  );
  
  
  }

  
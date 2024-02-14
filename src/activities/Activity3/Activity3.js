import Exercise from '../../activity-wrapper/exercises.component';
import audio1 from './audios/act3.1.mp3';
import audio2 from './audios/act3.2.mp3';


export default function Activity3() {
 
  const codeOutput = `
  import java.util.Scanner;

  public class Main {  

      private static final double PRICE = 234.90;  

      public static void main(String[] args) {  
          int unit;  
          double total_bill;  

          Scanner sc = new Scanner(System.in);  
          unit = sc.nextInt();  
          total_bill = PRICE * unit;  

          // Round the total bill to one decimal place
          total_bill = Math.round(total_bill * 10.0) / 10.0;

          System.out.print("Enter the number of units you have used: " + unit);  
          System.out.println(" The total amount you have to deposit is: " + total_bill);  
      }  
  }
  `;
  
   const codeAnswer = `Enter the number of units you have used: 10 
The total amount you have to deposit is: 2349.0`;
  
   const question = `Write a Java Program to declare constant as private.`;
  
  return (
    <Exercise heading={'TOPIC 3: CONSTANT'} question={question} audio1={audio1} codeOutput={codeOutput} codeAnswer={codeAnswer} audio2={audio2}  newInputValue={10} questionNo={3}/>
  );
  
  
  }
  
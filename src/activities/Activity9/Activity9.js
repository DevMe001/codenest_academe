import Exercise from '../../activity-wrapper/exercises.component';


export default function Activity9() {
 
  const codeOutput = `
  import java.util.Scanner;
  public class Main {
  
      public static void main(String[] Strings) {
  
          Scanner input = new Scanner(System.in);
          int num = input.nextInt();
          System.out.print("Input an integer between 0 and 1000:  " + num );
     
  
          int firstDigit = num % 10;
          int remainingNumber = num / 10;
          int SecondDigit = remainingNumber % 10;
          remainingNumber = remainingNumber / 10;
          int thirdDigit = remainingNumber % 10;
          remainingNumber = remainingNumber / 10;
          int fourthDigit = remainingNumber % 10;
          int sum = thirdDigit + SecondDigit + firstDigit + fourthDigit;
          System.out.println(" The sum of all digits in " + num + " is " + sum);
  
      }
  }
    
  `;
  
   const codeAnswer = `Input an integer between 0 and 1000:  565 The sum of all digits in 565 is 16`;
  
   const question = `Write a Java program that reads an integer between 0 and 1000 and adds all the digits in the integer.`;
  
  return (
    <Exercise heading={'TOPIC 9: Integer'} question={question}  codeOutput={codeOutput} codeAnswer={codeAnswer}  newInputValue={565} questionNo={9}/>
  );
  
  
  }

  
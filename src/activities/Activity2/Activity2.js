
import audio1 from './audios/act2.1.mp3';
import audio2 from './audios/act2.2.mp3';
import Exercise from '../../activity-wrapper/exercises.component';

export default function Activity2() {
 
const codeOutput = `
import java.util.Scanner;

public class Main{

    public static void main(String[] Strings) {

        Scanner input = new Scanner(System.in);

        double fahrenheit = input.nextDouble();

        double celsius = ((5 * (fahrenheit - 32.0)) / 9.0);
        System.out.println("Input a degree in Fahrenheit:" +  fahrenheit + 
        " degree Fahrenheit is equal to " + celsius + " in Celsius");
    }
}
`;

 const codeAnswer = `Input a degree in Fahrenheit: 212 degree Fahrenheit is equal
  to 100 in Celsius`;

 const question = `Write a Java Program to convert temperature from Fahrenheit to Celsius degrees.`;

return (
  <Exercise  heading={'TOPIC 2: DATA TYPES'} question={question} audio1={audio1} codeOutput={codeOutput} codeAnswer={codeAnswer} audio2={audio2}  newInputValue={212} questionNo={2}/>
);


}

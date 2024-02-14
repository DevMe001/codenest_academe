
import audio1 from './audios/act1.1.mp3';
import audio2 from './audios/act1.2.mp3';
import Exercise from '../../activity-wrapper/exercises.component';

export default function Activity1() {
 
const codeOutput = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
}
  }`;

 const codeAnswer = `Hello World`;

 const question = `Create a simple program in java program that will display “Hello World”`;

return (
  <Exercise heading={'TOPIC 1: JAVA SYNTAX'} question={question} audio1={audio1} codeOutput={codeOutput} codeAnswer={codeAnswer} audio2={audio2}  newInputValue='0' questionNo={1}/>
);


}

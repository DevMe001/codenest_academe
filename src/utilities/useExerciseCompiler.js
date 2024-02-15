import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import localforage from "localforage";
import { isEmpty, isNull, isUndefined} from 'lodash';
import { useNavigate } from 'react-router-dom';

const useExerciseCompiler = (api) => {

    const IndexedDB = localforage;

    const [getAnswer, setAnswer] = useState('');
    const [answerToggle, setAnswerToggle] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState('');
    const [typing, setTyping] = useState(false);
    const [valid, setValid] = useState('');
    const [counter, setCounter] = useState(0);
    const [questionNumber, setQuestionNUmber] = useState(0);
    const [defaultInputValue, setDefaultInputValue] = useState(0);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      // Retrieve the initial counter value from IndexedDB
      IndexedDB.getItem("attempt", function(err, value) {
        if (!err && value) {
          const storedCounter = JSON.parse(value).attempt;
          setCounter(storedCounter);
        }
      });
 
    }, []);
  
    const onTyping = async(e) => {
      if (!isEmpty(e.target.value)) {

       
        const isCorrect = await IndexedDB.getItem('attempt');

        if(!isNull(isCorrect)){

          const isGet = JSON.parse(isCorrect) ?? 0;
         if(isGet.attempt > 3){
          setTyping(false)
          setDisplayAnswer(`You already submitted you answer, click next for another exercises`);
          setValid('error');
         }else{
   
          setTyping(true)
         }
         setAnswer(e.target.value);
        }
        else{
          setTyping(true)
          setAnswer(e.target.value);
        }
       
      
      } else {
        setTyping(false)
      }
    }


    async function storeAnswer(questionNum, answer,questionAnswer) {
      const storeAnswerQuestion = {
          questionNum,
          answer,
          questionAnswer
      };
  
      const getExercises = await IndexedDB.getItem('exercise');
      let mergedArray;
  
      if (!isNull(getExercises)) {
          mergedArray = JSON.parse(getExercises);
          mergedArray.push(storeAnswerQuestion); // Add new object to the array
      } else {
          mergedArray = [storeAnswerQuestion]; // Initialize array with the new object
      }
  
      console.log(mergedArray, 'merged array');
  
      IndexedDB.setItem("exercise", JSON.stringify(mergedArray));
   }

    function validateAnswer(questionAnswer,validAnswer,questionNo){


      console.log(questionAnswer.replace(/\s/g, ""))
      console.log(validAnswer.replace(/\s/g, ""))

        if(questionAnswer.replace(/\s/g, "") == validAnswer.replace(/\s/g, "")){

          setDisplayAnswer(`${questionAnswer}`);
          setValid('correct');
          setTyping(false);

          IndexedDB.setItem("attempt", JSON.stringify({ attempt: 4 }));
          
          storeAnswer(questionNo,true,questionAnswer)
            
         
        }
        else{
    
            setDisplayAnswer(`${questionAnswer}`);
            setValid('incorrect');
      
                // Increment the counter
                setCounter(prevCounter => {
                  const newCounter = prevCounter + 1;
                  // Update the counter value in IndexedDB
                  if (newCounter <= 3) {
                    IndexedDB.setItem("attempt", JSON.stringify({ attempt: newCounter }));
                  } else {
                    setTyping(false);
                    setDisplayAnswer(`Maximun attempt exceed,click next for another exercises`);
                    setValid('error');
                    
                    storeAnswer(questionNo,false,questionAnswer)
                  }
                  return newCounter;
                });
       
        }
        setAnswer('');
    }
  

  
    const onRunCompiler = async () => {
      try {
      
  
        const javaCode = getAnswer; // Assuming getAnswer is a function that retrieves Java code
        const res = await axios.post(api, {
          javaCode,
          userInput:!isNull(defaultInputValue) ? defaultInputValue : undefined
        });
        

        if(!isEmpty(res.data)){
          let answer = res.data.answer;
          

  
          console.log(answer,'get answer');
  
          if(answer != 'error'){

          console.log(questionNumber,'get question #')

          switch(questionNumber){
            case 1:
              validateAnswer(answer,'Hello World',questionNumber);
             break
            case 2:
              //find the value
            let questionSplice2 = answer.match(/\d+(\.\d+)?/g);

              const getFilterString = questionSplice2.filter(part => !isNaN(part));

              console.log(getFilterString);

              let getFarenheit = getFilterString[0];
              let getCelsious = getFilterString[getFilterString.length - 1];

             
              const farcelsiousAnswer = `Input a degree in Fahrenheit:${getFarenheit} degree Fahrenheit is equal to ${getCelsious} in Celsius`

            
              console.log(answer.replace(/\s/g, ""));
              console.log(farcelsiousAnswer.replace(/\s/g, ""));

              validateAnswer(answer,farcelsiousAnswer,questionNumber);
              break
            case 3:
                //find the value
              let spliceAnswer = answer.match(/\d+(\.\d+)?/g);
                const getNumber = spliceAnswer.filter(item => !isNaN(item));
  
                console.log(getNumber);

                let getUnit = getNumber[0];
                let getTotalAmount = getNumber[getNumber.length - 1];


                console.log(answer);
               
                const unitTotalAnswer = `Enter the number of units you have used: ${getUnit} The total amount you have to deposit is: ${getTotalAmount}`
  
                validateAnswer(answer,unitTotalAnswer,questionNumber);
            break
            case 4:

              validateAnswer(answer,'Original string: The quick brown fox jumps over the lazy dog. New String: The quick brown fox jumps over the lazy fog.',questionNumber);
              break
            case 5:
              validateAnswer(answer,'Original String: PHP Exercises and Python Exercises  Specified sequence of char values: and true',questionNumber);

              break
            case 6:
              validateAnswer(answer,`He said "Java is fun unlimited"`,questionNumber);

              break
            case 7:
              validateAnswer(answer,'String 1: PHP Exercises and String 2: Python Exercises The concatenated string: PHP Exercises and Python Exercises',questionNumber);

              break
            case 8:

              const getEightAnswer = answer.match(/\d+(\.\d+)?/g);

              const getWholeNumber = getEightAnswer.filter(item => !isNaN(item))
              
              const getByte = getWholeNumber[0];
              const stringByte = getWholeNumber[getWholeNumber.length - 1];

              const questionAnswerValid =  `Enter the Byte Value : ${getByte} String value : ${stringByte}`;


              validateAnswer(answer,questionAnswerValid,questionNumber);

              break
            case 9:

              const nineQuestionAnswer = answer.match(/\d+(\.\d+)?/g);

              const getNineWholeNumber = nineQuestionAnswer.filter(item => !isNaN(item));

              const getInteger = getNineWholeNumber[2];
              const sumAll = getNineWholeNumber[getNineWholeNumber.length - 1];

              const nineAnswer = `Input an integer between 0 and 1000: ${getInteger} The sum of all digits in 565 is ${sumAll}`


              validateAnswer(answer,nineAnswer,questionNumber);

              break
            case 10:

            const tenQuestionAnswer = answer.match(/\d+(\.\d+)?/g);

            const getTenWholeNumber = tenQuestionAnswer.filter(item => !isNaN(item));

            const shortValue = getTenWholeNumber[0];
            const stringValue = getTenWholeNumber[getTenWholeNumber.length - 1];

      
            const validTenAnswer =`Enter the Short Value : ${shortValue} String Value : ${stringValue}`;

              validateAnswer(answer,validTenAnswer,questionNumber);

              break
            default:
              console.log('no question found')
          };
          
        }else{
          if(answer == 'error'){
            let compiler = res.data.error;
            setDisplayAnswer(`${compiler}`);
            setValid('error');
          }
        }

        }
  
        
  
      } catch (error) {
        console.log(error)
      }
    }
  
  
    const toggleAnswer = ()=>{
      setAnswerToggle(!answerToggle);
    }
  

  return [toggleAnswer,onRunCompiler,onTyping,setDefaultInputValue,setQuestionNUmber,displayAnswer,answerToggle,typing,valid,counter]
}

export default useExerciseCompiler
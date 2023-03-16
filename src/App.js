import './App.css';
import {useState} from 'react'

function App() {
   const [showResults, setShowResults] = useState(false);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   
   const question = [
    {
      text : "The Centre for Cellular and Molecular Biology is situated at?",
      option: [
        {id:0,text: "Patna", isCorrect: false},
        {id:1,text: "Jaipur", isCorrect: false},
        {id:2,text: "Hyderabad", isCorrect: true},
        {id:3,text: "New Delhi", isCorrect: false},

      ],
    },
    
    {
      text : "Wadia Institute of Himalayan Geology is located at ?",
      option: [
        {id:0,text: "Delhi", isCorrect: false},
        {id:1,text: "Shimla", isCorrect: false},
        {id:2,text: "Dehradun", isCorrect: true},
        {id:3,text: "Kulu", isCorrect: false},

      ],
    },
    {
      text : " Bijapur is known for its?",
      option: [
        {id:0,text: "Severe Drought Condition", isCorrect: false},
        {id:1,text: "Gol Gumbaz", isCorrect: true},
        {id:2,text: "Heavy Rainfall", isCorrect: false},
        {id:3,text: "Statue of Gomateswara", isCorrect: false},

      ],
    },
    {
      text : "What is the largest state in the US?",
      option: [
        {id:0,text: "California ", isCorrect: false},
        {id:1,text: "Alaska", isCorrect: true},
        {id:2,text: "Texas", isCorrect: false},
        {id:3,text: "Montana", isCorrect: false},

      ],
    },
    {
      text : "Which of the following countries DO NOT border the US?",
      option: [
        {id:0,text: "Canada", isCorrect: false},
        {id:1,text: "Russia", isCorrect: false},
        {id:2,text: "Cuba", isCorrect: true},
        {id:3,text: "Mexico", isCorrect: false},

      ],
    },

   ];
     

   const optionClicked  = (isCorrect,e)=>{
    if(isCorrect){
      setScore(score+1)
      // e.target.style.backgroundColor= "green";
      
    }
    
    if(currentQuestion+1 < question.length){
      setCurrentQuestion(currentQuestion+1)
    }else{
      setShowResults(true);
    }

   }


   const restartGame = ()=>{
     setScore(0)
       setCurrentQuestion(0)
       setShowResults(false)
   }
     return (
    <div className="App">
       <h1 style={{
        color:"green",
        fontSize:"100px",
        boxShadow: "5px 2px"

       }}>India Quiz</h1>
       <h2>Score:{score}</h2>
       {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {question.length} correct - (
            {(score / question.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {question.length}
          </h2>
          <h3 className="question-text">{question[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {question[currentQuestion].option.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

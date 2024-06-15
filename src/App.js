import { useEffect, useState } from 'react'
import './App.css'
import CrorePathi from './components/CrorePathi';
import Timer from './components/Timer';

function App() {
  const[questionNumber,setQuestionNumber]=useState(1)
  const[stop,setStop]=useState(false)
  const[earned,setEarned]=useState("$ 0")
  const data = [
    {
        id: 1,
        question: "Rolex is a company that specializes in what type of product?",
        answers: [
            {
                text: "Phone",
                correct: false
            },
            {
                text: "Watches",
                correct: true
            },
            {
                text: "Food",
                correct: false
            },
            {
                text: "Cosmetic",
                correct: false
            }
        ]
    },
    {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
            {
                text: "2004",
                correct: true
            },
            {
                text: "2005",
                correct: false
            },
            {
                text: "2006",
                correct: false
            },
            {
                text: "2007",
                correct: false
            }
        ]
    },
    {
        id: 3,
        question: "Who played the character of Harry Potter in the movie?",
        answers: [
            {
                text: "Johnny Depp",
                correct: false
            },
            {
                text: "Leonardo DiCaprio",
                correct: false
            },
            {
                text: "Denzel Washington",
                correct: false
            },
            {
                text: "Daniel Radcliffe",
                correct: true
            }
        ]
    },
    {
        id: 4,
        question: "What is the capital of France?",
        answers: [
            {
                text: "Paris",
                correct: true
            },
            {
                text: "London",
                correct: false
            },
            {
                text: "Berlin",
                correct: false
            },
            {
                text: "Madrid",
                correct: false
            }
        ]
    },
    {
        id: 5,
        question: "What is the chemical symbol for water?",
        answers: [
            {
                text: "H2O",
                correct: true
            },
            {
                text: "CO2",
                correct: false
            },
            {
                text: "NaCl",
                correct: false
            },
            {
                text: "O2",
                correct: false
            }
        ]
    },
    {
        id: 6,
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Earth",
                correct: false
            },
            {
                text: "Mars",
                correct: true
            },
            {
                text: "Jupiter",
                correct: false
            },
            {
                text: "Saturn",
                correct: false
            }
        ]
    },
    {
        id: 7,
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {
                text: "Charles Dickens",
                correct: false
            },
            {
                text: "William Shakespeare",
                correct: true
            },
            {
                text: "Mark Twain",
                correct: false
            },
            {
                text: "J.K. Rowling",
                correct: false
            }
        ]
    },
    {
        id: 8,
        question: "In which year did World War II end?",
        answers: [
            {
                text: "1942",
                correct: false
            },
            {
                text: "1945",
                correct: true
            },
            {
                text: "1950",
                correct: false
            },
            {
                text: "1939",
                correct: false
            }
        ]
    },
    {
        id: 9,
        question: "What is the largest ocean on Earth?",
        answers: [
            {
                text: "Atlantic Ocean",
                correct: false
            },
            {
                text: "Indian Ocean",
                correct: false
            },
            {
                text: "Arctic Ocean",
                correct: false
            },
            {
                text: "Pacific Ocean",
                correct: true
            }
        ]
    },
    {
        id: 10,
        question: "Who painted the Mona Lisa?",
        answers: [
            {
                text: "Vincent van Gogh",
                correct: false
            },
            {
                text: "Pablo Picasso",
                correct: false
            },
            {
                text: "Leonardo da Vinci",
                correct: true
            },
            {
                text: "Claude Monet",
                correct: false
            }
        ]
    },
    {
        id: 11,
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {
                text: "China",
                correct: false
            },
            {
                text: "South Korea",
                correct: false
            },
            {
                text: "Japan",
                correct: true
            },
            {
                text: "Thailand",
                correct: false
            }
        ]
    },
    {
        id: 12,
        question: "What is the smallest unit of life?",
        answers: [
            {
                text: "Organ",
                correct: false
            },
            {
                text: "Tissue",
                correct: false
            },
            {
                text: "Cell",
                correct: true
            },
            {
                text: "Atom",
                correct: false
            }
        ]
    },
    {
        id: 13,
        question: "Who was the first president of the United States?",
        answers: [
            {
                text: "Abraham Lincoln",
                correct: false
            },
            {
                text: "George Washington",
                correct: true
            },
            {
                text: "Thomas Jefferson",
                correct: false
            },
            {
                text: "John Adams",
                correct: false
            }
        ]
    },
    {
        id: 14,
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {
                text: "Gold",
                correct: false
            },
            {
                text: "Silver",
                correct: false
            },
            {
                text: "Diamond",
                correct: true
            },
            {
                text: "Iron",
                correct: false
            }
        ]
    },
    {
        id: 15,
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {
                text: "Hydrogen",
                correct: false
            },
            {
                text: "Helium",
                correct: false
            },
            {
                text: "Oxygen",
                correct: true
            },
            {
                text: "Nitrogen",
                correct: false
            }
        ]
    }
  ];
  const moneyPyramid =  [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse()
      useEffect(()=>{
        questionNumber >1 && setEarned(moneyPyramid.find(a=>a.id===questionNumber-1).amount)
      },[moneyPyramid,questionNumber])

  return (
    <div className="app">
      {stop? <h1 className='end-text'>You Earned {earned}</h1>:
       <><div className="main">
        
       
        <div className='top'>
          <div className='timer'><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className='bottom'><CrorePathi data={data} setStop={setStop} 
        questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/> </div>
      
     
      </div>
      <div className="pyramid">
        <ul className='money-list'>
          {moneyPyramid.map(val=>{
          return <li className={questionNumber===val.id ?'money-list-item active':'money-list-item'}>
            <span className='money-list-number'>{val.id}</span>
            <span className='money-list-amount'>{val.amount}</span>
          </li>
          })}
        </ul>
        
      </div>
      </>
      }
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function CrorePathi({data,setStop,questionNumber,setQuestionNumber}){
    const [question,setQuestion]=useState(null)
    const[selectedAnswer,setSelectedAnswer]=useState(null)
    const[classes,setClasses]=useState("answer")
    const handleClick=(que)=>{
        setSelectedAnswer(que)
        setClasses("answer active")
        setTimeout(() => {
            setClasses(que.correct? "answer correct":"answer wrong")
            
        }, 1000);
        setTimeout(()=>{
            if(que.correct){
                setQuestionNumber(prev=>prev+1)
            }
            else{
                setStop(true)
            }
        },[4500])
        
    }
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber])
    return <div className="crorepathi">
        <div className="questions">{question?.question}</div>
        <div className="answers">
            {question?.answers.map(que=>{
                return <div className={selectedAnswer===que?classes:"answer"} onClick={()=>handleClick(que)}>{que.text}</div>
            })}

        </div>
    </div>
}
export default CrorePathi;
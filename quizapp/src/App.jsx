import { useState } from 'react'
import './App.css'
import questions from './constants/questions.json'
import Question from './components/Question'
import Result from './components/Result'
const App = () =>{

  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [answers,setAnswers] = useState([])


  const onHandleNextQuestion = (answer) =>{
    setAnswers([...answers,answer])
    setCurrentQuestion(currentQuestion=>currentQuestion+1)

  }

  const onReset = () =>{
    setAnswers([])
    setCurrentQuestion(0)
  }

return <div className='App'>
    <h1>World Quiz</h1>
    {currentQuestion<questions.length ? <Question question={questions[currentQuestion]} onAnswerClick={onHandleNextQuestion}/> : <Result answers={answers} questions={questions} onReset={onReset}/>}
</div>
}

export default App
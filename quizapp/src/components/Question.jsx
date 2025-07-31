const Question = ({question,onAnswerClick}) =>{

return <div className="question">
        <h1>{question.question}</h1>
        <ul className="options">
    {question.answerOptions.map(option => <li key={option.text} onClick={()=>onAnswerClick(option)}><button className="button">{option.text}</button></li>)}
        </ul>
</div>
}

export default Question
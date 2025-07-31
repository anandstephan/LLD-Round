const Result = ({answers,questions,onReset}) =>{
    const correctAnswer = answers.filter(ans => ans.isCorrect)
return <div>
    <h2>Result</h2>
    <h3>You are give {correctAnswer.length} correct answer out of {questions.length}</h3>
    <span><button className="button" onClick={onReset}>Reset</button></span>
</div>
}

export default Result
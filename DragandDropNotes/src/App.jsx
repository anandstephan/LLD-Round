import { useState } from "react"
import Notes from "./components/Notes"

const App = () =>{
  const [notes,setNotes] = useState([{
    id:0,
    text:"This is my first notes"
  },{
    id:1,
    text:"This is my second notes"
  }])
return <div>
    <Notes notes={notes} setNotes={setNotes}/>
</div>
}

export default App
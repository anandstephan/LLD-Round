import { createRef, useEffect, useRef } from "react"
import Note from "./Note"

const determineNewPositionn = () =>{
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250
    return {
        x:Math.floor(Math.random()*maxX),
        y:Math.floor(Math.random()*maxY)
    }
}

const Notes = ({notes=[],setNotes=()=>{}}) =>{

    const noteRefs = useRef([])

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("notes"))||[]
        const updateNotes = notes.map(note =>{
            const savedNote = savedNotes.find(n => n.id===note.id)
            if(savedNote){
                return {...note,position:savedNote.position}
            }else{
                const position = determineNewPositionn()
                return {...note,position}
            }
        })
        setNotes(updateNotes)
        localStorage.setItem("notes",JSON.stringify(updateNotes))
    },[notes.length])

    const onDragStart = (note,e) =>{
        const {id} = note
        const noteRef = noteRefs.current[id].current
        const rect = noteRef.getBoundingClientRect()
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const startPos = note;
        const handleMouseMove = (e) =>{
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            noteRef.style.left = `${newX}px`
            noteRef.style.top = `${newY}px`
        }
        const handleMouseUp = () =>{
            document.removeEventListener("mousemove",handleMouseMove)
            document.removeEventListener('mouseup',handleMouseUp)

            const finalRect = noteRef.getBoundingClientRect()
            const newPosition = {x:finalRect.left,y:finalRect.top}

            if(false){

            }else{
                updateNotification(id,newPosition)
            }
        }

        document.addEventListener('mousemove',handleMouseMove)
        document.addEventListener('mouseup',handleMouseUp)
    }
    const updateNotification = (id,newPosition) =>{
        const updatedNotes = notes.map(note => note.id === id ? {...note,position:newPosition}:note)
        setNotes(updatedNotes)
        localStorage.setItem('notes',JSON.stringify(updatedNotes))
    }

return <div>
        {notes.map((note) => <Note 
        key={note.id} 
        initialPostion={note.position} 
        content={note.text} 
        ref={noteRefs.current[note.id] ?noteRefs.current[note.id] : noteRefs.current[note.id] = createRef()}
        onMouseDown={(e)=>onDragStart(note,e)}
        />)}
</div>
}

export default Notes
import { useState } from 'react'
import '../App.css'

const SelectableGrid = ({rows,cols}) =>{

    const [isMouseDown,setIsMouseDown] = useState(false)
    const [selectedBoxes,setSelectedBoxes] = useState([])

    const handleMouseDown = (boxNumber) =>{
        console.log(boxNumber)
        setIsMouseDown(true)
        setSelectedBoxes([boxNumber])
    }

    const handleMouseUp = (boxNumber) =>{
        setIsMouseDown(false)
    }

    const handleMouseEnter = (boxNumber) =>{
        if(isMouseDown){
      const startBox = selectedBoxes[0]
        const endBox = boxNumber
      
        const startRow = (Math.floor(startBox-1)/cols)
        const startCol = (startBox-1)%cols;
        const endRow = (Math.floor(endBox-1)/cols)
        const endCol = (endBox-1)%cols;

        const minRow =  Math.min(startRow,endRow)
        const maxRow = Math.min(startRow,endBox)

        const maxCol = Math.max(startCol,endCol)
        const minCol = Math.min(startCol,endCol)

            let selected = []
            for(let row = minRow;row<=maxRow;row++){
                for(let col =minCol;col<=maxCol;col++ ){
                    selected.push(row*cols+col+1)
                }
            }

            setSelectedBoxes(selected)
            console.log(selected)



        
        
            
    }

    }



return <div className="grid" style={{"--rows":rows,"--cols":cols}} onMouseUp={handleMouseUp}>
    {[...Array(rows*cols).keys()].map((_,i) => {
        return <div key={i} 
        className={`box ${selectedBoxes.includes(i+1)? 'selected' : ''} `}
        onMouseDown={()=>handleMouseDown(i+1)}
        onMouseEnter={()=>handleMouseEnter(i+1)}
        >
            <div>{i+1}</div>
        </div>
    })}
</div>
}

export default SelectableGrid
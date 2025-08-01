import { useEffect, useRef, useState } from "react"

const Stepper = ({steps=[]}) =>{

    const [currentStep,setCurrentStep] = useState(0)
    const [margins,setMargins] = useState({
        marginLeft:0,
        marginRight:0
    })
    const ref = useRef([])

    const handleClick = ()=>{
        setCurrentStep(currentStep+1)
    }
    const ActiveComponent = steps[currentStep].Component
    const calculateWidth = () =>{
        return (currentStep/(steps.length-1)*100)+"%"
    }
    useEffect(()=>{
        setMargins({
            marginLeft:ref.current[0].offsetWidth,
            marginRight:ref.current[steps.length-1].offsetWidth
        })
    },[currentStep])
return <>
<div className="stepper">
    {steps.map((step,idx) =>{
        
    const dynamicClassName = currentStep>idx ?"complete":""
    const dynamicClassName2 = currentStep==idx?"active":""
        return <div key={idx} className={'step '+dynamicClassName+" "+dynamicClassName2} ref={el => ref.current[idx] = el}>
            <div className="step-number">
                {currentStep>idx?<span>&#10003;</span> : idx+1}
                
                </div>
            <div className="step-name">{step.name}</div>
            </div>
    })}
<div className="progress-bar"  style={{width:`${calculateWidth()}`}} >
    <div className="progress"></div>
</div>    
</div>

<div><ActiveComponent/></div>
<button className="btn" onClick={handleClick}>{currentStep === steps.length ? "Finish":"Next"}</button>
</>
}

export default Stepper
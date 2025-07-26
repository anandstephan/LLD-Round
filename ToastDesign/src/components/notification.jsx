import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfo, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai"
import './notification.css'
const icons = {
    sucess:<AiOutlineCheckCircle/>,
    info:<AiOutlineInfoCircle/>,
    warning:<AiOutlineWarning/>,
    error:<AiOutlineCloseCircle/>
}
const Notification = ({type="info",message,onClose}) =>{
return <div className={`notification ${type}`}>
    {icons[type]}
    {message}
    <AiOutlineClose onClick={()=>onClose()} className="closeBtn"/>
</div>
}

export default Notification
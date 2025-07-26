import { useState } from "react"
import Notification from "../components/notification"

const useNotification = (position='top-right') =>{
    const [notification,setNotification] = useState(null)

    const triggerNotification = (notificationProps) =>{
        setNotification(notificationProps)
        setTimeout(()=>{
            setNotification(null)
        },notificationProps.duration)
    }

    const NotificationComp = notification ? <div className={`${position}`}><Notification {...notification}/></div>:null
    return {NotificationComp,triggerNotification}
}

export default useNotification
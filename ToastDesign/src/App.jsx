import Notification from "./components/notification"
import useNotification from "./hooks/use-notifcation"

const App = () =>{
  const {NotificationComp,triggerNotification} = useNotification('bottom-right')
return <div>
  <button onClick={()=>triggerNotification({
    
    type:"error",
    message:"Msg Failed",
    duration:3000
  })}>Click Me</button>
  {NotificationComp}
</div>
}

export default App
import * as React from 'react';
import { DialogProvider, useDialogContext } from '../../../libraries/base/lib';
import { NotificationModal } from '../../../libraries/notifications/lib';


export const TestDialogContent = ({ onChange }: any) =>{
  const [ count, setCount ] = React.useState(0)
  return (
    <div className='test-dcontent'>
      <div> Eu sou um dialog teste</div>
      <span> contagem: {count} </span>
      <button onClick={() => setCount(count+1)}> + </button>
      <button onClick={() => onChange("CLOSE")}> fechar </button>
      <button onClick={() => onChange("ADD")}> add </button>
    </div>
  )
}

export const ViewPortExample = () =>{

  const { push } = useDialogContext();

  const pushDialog = () => {
    push(<NotificationModal></NotificationModal>)
  }

  return (
    <div > 
      <h2> viewport exemplo </h2>
      <button onClick={pushDialog}> Abri um dialog </button> 
    </div>
  )

}

export default ViewPortExample
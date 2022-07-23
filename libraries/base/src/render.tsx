import React, { useCallback } from "react";
import { useDialogContext } from "./context"
import "./style.css"
import { IDialogStack } from "./types";

export const ContentWrapper: IDialogStack.ContentWrapper = ({ children, ctxId, ctsCallBack }) => {

  const { remove } = useDialogContext();
  const handleChanges = (payload: any) =>{
    const final_result = !ctsCallBack ? -1 : ctsCallBack(payload);
    if(final_result==-1){
      remove(ctxId)
    }
  }

  return (
    <div className={`content-wrapper`}>
      { 
        React.Children.map(children, child => {
          return React.cloneElement(child, { 
            ...child.props,
            onChange: handleChanges
          }, null);
        })
      }
    </div>
  )
}

export const DialogStack = () =>{
  const { stack } = useDialogContext();
  const renderDialogs = useCallback( () => (
    stack.map(({ id, content, onChange }: IDialogStack.Params)=> (
     <ContentWrapper ctxId={id} ctsCallBack={onChange} key={id}>
       {content}
     </ContentWrapper>
    ))
  ), [stack])
  return (
    <div className={`dialog-stack-overflow ${stack.length > 0 ? 'show' : ''}`}>
      { renderDialogs() } 
    </div>
  )
}

export default DialogStack
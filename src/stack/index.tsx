
import React, { FC, useState } from 'react'
import Dialog, { DialogConfig } from "../Dialog"


export namespace DialogStack {
    export type Result = [ 
        React.FunctionComponent, 
        { 
            stack: DialogConfig[], 
            push: (n:DialogConfig)=>void
        } 
    
    ]
}
export const DialogStack = (): DialogStack.Result=>{

    const [ stack, setStack ] = useState<DialogConfig[]>([]);
     
    const pop = (id: string) =>{
        setStack((prev)=>{
            var new_stack = [ ...prev ];
            new_stack = new_stack.filter(v=>v.id != id)
            return new_stack
        })
    }

    const push =(novo: DialogConfig) =>{
        actionHandler(novo)
        setStack(prev=>{
            var new_stack = [ ...prev ];  
            new_stack.push(novo) 
            return new_stack
        })
    } 
  
    const actionHandler = ( config: DialogConfig) => {
        const action = config.onAction
        config.onAction = async (n: any) =>{
            n = action ? ( await action(n) ) || n : n;
            if(n === -1) return pop(config.id)
        }
    }

    return (

        [() =>(
            <React.Fragment>
                { stack.map((c,i)=> <Dialog show={stack.length - 1 == i} config={c} key={i} offset={i}></Dialog> ) } 
            </React.Fragment>
        ),{  stack, push } ]
    )
}

export default DialogStack


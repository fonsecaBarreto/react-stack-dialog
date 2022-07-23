import React, { createContext, useCallback, useRef, useState} from 'react';
import DialogStack from "./render";
import { DialogContextType, IDialogStack } from './types';

const DialogContext = createContext<DialogContextType | null>(null);
const { Provider } = DialogContext;

function DialogProvider({ children }: any)  {

  const count = useRef(0);
  const [ stack, setStack ] = useState<IDialogStack.Params[]>([]);
     
  const remove = useCallback( (id: any) =>{
    setStack((prev)=>{
      var new_stack = [ ...prev ];
      new_stack = new_stack.filter((v)=>v.id != id)
      return new_stack;
    })
  },[stack]);

  const push = useCallback(async (novo: React.ReactNode, onChange?: any, clear?:boolean) =>{
    if(!novo) return;
    count.current++;

    const newItem = new IDialogStack.Params({
      content: novo, 
      onChange, 
      id: count.current
    });

    if(clear === true){
      setStack([ newItem ]);
    }else{
      setStack(prev=> ([ ...prev ,  newItem ]));
    }
      
  },[stack])

  const value = React.useMemo(() => ({ push, remove, stack }), [stack])

  return ( 
    <Provider value={value}>
      <DialogStack/>
      {children}
    </Provider> 
  );
};

function useDialogContext() {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error(`useDialogContext must be used within a DialogProvider`)
  }
  return context
}

export { DialogProvider, useDialogContext };



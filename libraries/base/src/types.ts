import React from "react"

/* stack componetns */
export namespace IDialogStack {

  export enum Anchor {
    CENTER, RIGHT, LEFT, BOTTOM, TOP
  }

  export type onChangeFunction = (n:any)=>any

  export type ContentWrapper = React.FunctionComponent<any>
  
  export class Params {
    id: any
    onChange?: onChangeFunction = () => -1;
    content: any
    constructor(fields?:Partial<Params>){
      Object.assign(this,fields)
    }
  }
}
/* contenxt */
export type DialogContextType = {
  stack: any[],
  push: ( content: any,  onChange?: any ) => void
  remove: ( id: any ) => void
};

import React, { ReactNode } from 'react'
import './style.css'
import { v4 } from 'uuid'
export type OnActionFunction = (n:any)=>any

export type DialogContent = React.FunctionComponent<{onAction: OnActionFunction}>

export type DialogConfig = {
    content: DialogContent
    title: string,
    icon:  ReactNode
    loading: boolean,
    onAction: OnActionFunction,
    id: string
}

export type DialogProps = {
    config: DialogConfig,
    offset?: number,
    show: boolean
}

export const MakeDialogConfig = ( content: DialogContent, onAction: OnActionFunction, title="...", icon=null, loading =false): DialogConfig => {
    return ( { content, onAction, title, icon, loading, id: v4() } )
}

export function Dialog({ config, offset=0, show= true }: DialogProps): JSX.Element{
    const { content: Content , title, loading, onAction, icon } = config
    return (
        <React.Fragment>
            <div className={`fck-dialog ${show? "show": ""}`}>
                <div className='fck-dialog-float-container' style={{paddingTop: 64 + (offset * 6)}}>
                    <div className="fck-dialog-content">
                        <div className="fck-dialog-header">
                            { icon && <span> {icon}</span>} 
                            { title && <span>{title}</span>}
                            <button onClick={() => onAction(-1)} className="adc-close"> 
                                &#x2715;
                            </button>
                        </div>
                        <div className={`fck-dialog-body ${loading ?' div-loading' : ''}`}>
                        <Content onAction={onAction} ></Content>
                        </div> 
                    </div> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dialog


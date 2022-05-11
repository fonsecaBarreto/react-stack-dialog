import React, { ReactNode } from 'react'
import './style.css'
import { MakeDialogConfig, OnActionFunction } from '../Dialog'

export enum NotificationType {
    SUCCESS,
    FAILURE,
    INFO,
    CONFIRMATION
}

export function MakeNotification(onAction: OnActionFunction, messages: string[] = [], title: string="", type: NotificationType) {

    var icon: ReactNode;
    var buttons: string[] = [];

    switch(type) {
        case NotificationType.SUCCESS: 
            icon= null;
            messages = messages || ["Operação Relizada com sucesso"];
            buttons= ["Ok"];
        break;
        case NotificationType.FAILURE: 
            icon= null;
            messages = messages || ["Não foi possivel realizar essa ação."]
            buttons= ["Ok"];
        break;
        case NotificationType.INFO: 
            icon= null;
            messages= messages || [""],
            buttons= [];
        break;
        case NotificationType.CONFIRMATION: 
            icon= null;
            messages= messages || ["Confirme!"],
            buttons= [ "Sim", "Não" ];
        break;
    }

    return MakeDialogConfig( ({onAction}) => ( 
        <div className="notify-dialog"> 
            { icon && <span className="notify-d-icon"> {icon} </span>}
            <section className="notify-d-content-body">
                { messages.length > 0 && messages.map((m, i)=>(<span key={i}>{m}</span>)) }
            </section>
            <section className="notify-d-btns">
                { buttons.map((b,i)=>( <button onClick={()=> onAction(i)} key={i}> {b} </button>)) }
            </section>
        </div>
    ),onAction, title )
}

export default MakeNotification
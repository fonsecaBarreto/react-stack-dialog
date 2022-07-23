import * as React from 'react';
import "./style.css"

export const NotificationModal: React.FunctionComponent<any> = ({children, icon, title, onChange}) =>{
  return (
    <div className={`fck-notification-container`}>
      <div className='fck-notification-content'>
        <header>
            { icon && <span> {icon}</span>} 
            { title && <span>{title}</span>}
            <button onClick={() => onChange(-1)} className="adc-close"> 
                &#x2715;
            </button>
        </header>
        <main>
          ue
          { children }
        </main> 
        <footer></footer>
      </div>
  </div>
  )
}
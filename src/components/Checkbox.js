import React from 'react'
import './checkbox.css'
function Checkbox({targetid, text, value}) {
    return (
        <label htmlFor={targetid} className="checkbox">
              <div className={`checkbox__inner ${value ? 'checked':null}`}>
                 
              </div>              
                  <p className="checkbox__text">{text}</p>             
        </label>
    )
}

export default Checkbox

/* eslint-disable no-sequences */
import React from 'react';

function Switch(){

    function handleChange(event){
        let evento = event.target.checked

        if (evento) {
            document.body.classList.add('is-light-mode')
            document.body.classList.remove('is-dark-mode')
          } else {
            document.body.classList.add('is-dark-mode')
            document.body.classList.remove('is-light-mode')
          }

          console.log(evento)
    }
    
    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input  onChange={handleChange} type="checkbox" className="checkbox" id="checkbox" />
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    );
}

export default Switch;
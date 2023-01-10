import React from 'react'
import styles from './format.module.css'

export default function Modal({modal_show, formData, setClose}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(formData))
    alert('copied to clipboard')
  }
  return (
    <div>
<div style={modal_show ? {visibility:'visible', opacity:1}: {visibility:'hidden', opacity:0}} id={styles.open_modal} className={styles.modal_window}>
  <div>
    <a style={{cursor:'pointer'}} onClick={() => setClose(false)}  className={styles.modal_close}>Close</a>
    <h1>Form Data  </h1>
    <div style={{cursor:'pointer', fontWeight:'bold'}} onClick={() => handleCopy() } ><small>Copy code</small></div>
    <div style={{lineBreak:'anywhere', maxHeight:'500px', overflow:'auto'}} >{JSON.stringify(formData)} </div>
    <br />
    </div>
</div>
</div>
  )
}

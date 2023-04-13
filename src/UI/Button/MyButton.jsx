import React from 'react'
import classes from '../Button/MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}

export default MyButton;

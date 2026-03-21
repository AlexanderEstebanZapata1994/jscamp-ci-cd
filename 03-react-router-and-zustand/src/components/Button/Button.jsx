import React from 'react'
import styles from './Button.module.css'


export function Button({children, onClick, className, type = 'primary', icon = null, ...otherProps}) {
    const handleClick = (event) => {
        event.preventDefault();
        onClick?.(event);
    }
    return (
        <button onClick={handleClick} className={`${styles.button} ${styles[`button--${type}`]} ${className}`} {...otherProps}>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {children}
        </button>
    )
}
import { NavLink } from 'react-router'
import styles from './Link.module.css'

export const Link = ({href, children, className, icon = null, ...otherProps}) => {
    
  const classes = `${className} ${styles.link}`;

  return (
    <NavLink 
      to={href} {...otherProps} 
      className={({isActive}) => isActive ? `${styles.navLinkActive} ${classes}` : classes}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </NavLink>
  )
}
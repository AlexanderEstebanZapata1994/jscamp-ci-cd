
import styles from './Link.module.css';
import { Link as NavLink } from 'react-router'

export const Link = ({href, children, className, ...otherProps}) => {
    

  return (
    <NavLink 
      to={href} {...otherProps} 
      className={`${className} ${({isActive}) => isActive ? styles.active : ''}`}
    >
      {children}
    </NavLink>
  )
}
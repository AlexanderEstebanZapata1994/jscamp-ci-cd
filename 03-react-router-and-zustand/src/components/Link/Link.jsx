import { Link as NavLink } from 'react-router'

export const Link = ({href, children, className, ...otherProps}) => {
    

  return (
    <NavLink 
      to={href} {...otherProps} 
      className={className}
    >
      {children}
    </NavLink>
  )
}
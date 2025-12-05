import { useRouter } from "../../hooks/useRouter.jsx";
import styles from './Link.module.css';

export const Link = ({href, children, className, ...otherProps}) => {
  
  const { currentPath, navigateTo } = useRouter();
  
  const handleClick = (event) => {
    event.preventDefault();
    navigateTo(href)
  }

  const isActive = currentPath === href;
  return (
    <a 
      href={href} {...otherProps} 
      onClick={handleClick}
      className={`${className} ${isActive ? styles.active : ''}`}
    >
      {children}
    </a>
  )
}
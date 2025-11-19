import { useRouter } from "../hooks/useRouter";

export const Link = ({href, children, ...otherProps}) => {
  
  const { navigateTo } = useRouter();
  
  const handleClick = (event) => {
    event.preventDefault();
    navigateTo(href)
  }

  return (
    /* TODO: Add a class when the link is active (use the currentPath hook) */
    <a href={href} {...otherProps} onClick={handleClick}>
      {children}
    </a>
  )
}
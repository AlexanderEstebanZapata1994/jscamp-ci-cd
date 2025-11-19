import { useState, useEffect } from "react";

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const handlePopState = () => {
      setCurrentPath(window.location.pathname);
  }
  
  useEffect(() => {
      window.addEventListener('popstate', handlePopState);

      return () => {
          window.removeEventListener('popstate', handlePopState);
      }
  }, [currentPath]);

  const navigateTo = (path) => {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return { currentPath, navigateTo };
}
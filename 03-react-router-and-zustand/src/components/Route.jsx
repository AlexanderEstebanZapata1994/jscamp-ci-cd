import { useRouter } from "../hooks/useRouter";

export const Route = ({path, component}) => {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;

  if (currentPath === path) return component;
}
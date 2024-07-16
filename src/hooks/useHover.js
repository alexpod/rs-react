import { useRef, useEffect, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);
    ref.current.addEventListener('mouseover', handleMouseOver);
    ref.current.addEventListener('mouseout', handleMouseOut);
    return () => {
      ref.current.removeEventListener('mouseover', handleMouseOver);
      ref.current.removeEventListener('mouseout', handleMouseOut);
    }
  }, [ref]);
  
  return { hovered, ref }
}
import {  useState, useEffect } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo = ({ x = 0, y = 0 }) => {
    window.scrollTo(x,y);
  }

  useEffect(() => {
    const handlerScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);

  }, []);
  
  return [ scroll, scrollTo ];
}
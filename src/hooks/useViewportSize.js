import { useEffect, useState } from "react";

export function useViewportSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

    
  
  return { width, height };
}
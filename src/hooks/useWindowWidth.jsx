import { useState, useEffect } from "react";

function useWindowWidth() {


  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  


  useEffect(() => {
    const handleResizeHeight = () => setHeight(window.innerHeight);
    const handleResizeWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeHeight);
    window.addEventListener("   ", handleResizeWidth);
    return () => {
      window.removeEventListener("resize", handleResizeHeight);
      window.removeEventListener("resize", handleResizeWidth);
    }
  }, []);
  return { height, width }; // Return the current width
}

export default useWindowWidth;

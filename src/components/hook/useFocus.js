import { useRef } from "react";

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    console.log("test");
    console.log(htmlElRef);
    console.log(htmlElRef.current.focus);
    console.log(htmlElRef.component);
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default useFocus;

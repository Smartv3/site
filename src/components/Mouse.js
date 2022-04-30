import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CursorContext } from "../helper/CursorContextProvider";
import "./mouse.css";

const Mouse = () => {
  const [cursor] = React.useContext(CursorContext);
  console.log(cursor)

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        transform: 'scale(0.5, 0.5) translateX(-50%)'
      }}
    />
  );
};

export default Mouse;

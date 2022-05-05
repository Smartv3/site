import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CursorContext } from "../helper/CursorContextProvider";
import "./mouse.css";

const Mouse = () => {
  const [cursor] = React.useContext(CursorContext);

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
      animate={{ scale: cursor.active ? 4 : 1 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        repeatDelay: 1,
      }}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default Mouse;

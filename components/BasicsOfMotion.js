"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  let fullWidth, fullHeight

  if (typeof window !== "undefined") {

    fullWidth = window.innerWidth;
    fullHeight = window.innerHeight;
  } else {
    fullWidth = 150;
    fullHeight = 150;
  }


  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        width: '100vw',
        overflow: "hidden"
      }}
    >
      <motion.button
        layout
        onClick={() => setIsVisible(!isVisible)} style={{ zIndex: 100, width: 150 }} className="example-button">{isVisible ? 'Hide' : 'Show'}</motion.button>
      <AnimatePresence mode="popLayout">
        {
          isVisible && (
            <motion.div
              initial={{ rotate: "0deg", scale: 1 }}
              animate={{ rotate: "180deg", scale: 10 }}
              transition={{
                duration: 1,
                type: "spring"

              }}

              exit={{
                rotate: "0deg",
                scale: 0,
                duration: 1


              }}

              style={{
                width: 150,
                height: 150,
                background: "black",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

              }}
            >

            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};


export default BasicsOfMotion;

/* eslint-disable react/prop-types */
// PageTransition.js
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      style={{ height: "100vh" }}
      transition={{ duration: 0.1 }}
      initial={{ x: "100%", translateZ: "0px", height: "100vh" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}>
      {children}
    </motion.div>
  );
};

export default PageTransition;

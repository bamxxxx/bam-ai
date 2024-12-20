import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const IntroSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 prose max-w-none bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    {...fadeIn}
  >
  </motion.section>
);
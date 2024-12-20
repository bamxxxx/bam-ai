import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const ApproachSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors"
    {...fadeIn}
  >
    <h2 className="text-2xl font-bold mb-6 text-consulting-text">Approach</h2>
    <h3 className="text-xl font-semibold mb-4">Strategic + Implementation</h3>
    <ul className="list-none space-y-3">
      {[
        "Comprehensive AI strategy development",
        "Hands-on implementation support",
        "Focus on delivering measurable business value"
      ].map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-consulting-accent rounded-full"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.section>
);
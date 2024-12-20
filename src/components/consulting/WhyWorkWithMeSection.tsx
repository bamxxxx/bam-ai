import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const WhyWorkWithMeSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors"
    {...fadeIn}
  >
    <h2 className="text-2xl font-bold mb-6 text-consulting-text">Why Work With Me</h2>
    <ul className="list-none space-y-3">
      {[
        "Entrepreneurial experience building AI-powered solutions",
        "Deep understanding of technology and business strategy",
        "Proven track record of successful AI integration",
        "Focused on tangible business outcomes"
      ].map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-consulting-accent rounded-full"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.section>
);
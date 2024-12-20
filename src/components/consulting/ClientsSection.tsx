import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const ClientsSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    {...fadeIn}
  >
    <h2 className="text-2xl font-bold mb-8 text-consulting-text">Trusted By Industry Leaders</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
      <img
        src="/lovable-uploads/microsoft-logo.png"
        alt="Microsoft"
        className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/lexisnexis-logo.png"
        alt="LexisNexis"
        className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/trellix-logo.png"
        alt="Trellix"
        className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  </motion.section>
);